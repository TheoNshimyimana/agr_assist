const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

let users = {};
let sessions = {};
let history = {};
let refreshTokens = {};
let blacklist = {};

function id() {
  return crypto.randomBytes(12).toString("hex");
}

function otp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function token(payload, secret, exp) {
  return jwt.sign(payload, secret, { expiresIn: exp });
}

function verify(tok, secret) {
  try {
    return jwt.verify(tok, secret);
  } catch {
    return null;
  }
}

function hashed(t) {
  return bcrypt.hash(t, 10);
}

function check(pw, hash) {
  return bcrypt.compare(pw, hash);
}

function black(t) {
  blacklist[t] = true;
}

function isBlack(t) {
  return !!blacklist[t];
}

function session(u) {
  const s = id();
  sessions[s] = { user: u, time: Date.now() };
  return s;
}

function validSession(s) {
  return sessions[s] ? true : false;
}

function endSession(s) {
  delete sessions[s];
}

function addHistory(user, role, msg) {
  if (!history[user]) history[user] = [];
  history[user].push({ role, msg, time: Date.now() });
}

function getHistory(user) {
  return history[user] || [];
}

function limit(ip) {
  if (!rate[ip]) rate[ip] = [];
  rate[ip].push(Date.now());
  rate[ip] = rate[ip].filter(x => Date.now() - x < 60000);
  return rate[ip].length > 30;
}

let rate = {};

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (users[username]) return res.json({ ok: false });
  const h = await hashed(password);
  users[username] = { password: h, email: username + "@mail.com" };
  res.json({ ok: true });
});

app.post("/otp", (req, res) => {
  const code = otp();
  res.json({ otp: code });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const u = users[username];
  if (!u) return res.status(401).json({ error: "invalid" });
  const ok = await check(password, u.password);
  if (!ok) return res.status(401).json({ error: "invalid" });

  const tok = token({ user: username }, "secret", "15m");
  const ref = crypto.randomBytes(30).toString("hex");
  refreshTokens[username] = ref;
  const ses = session(username);

  res.json({
    access: tok,
    refresh: ref,
    session: ses
  });
});

app.post("/refresh", (req, res) => {
  const { username, refresh } = req.body;
  if (refreshTokens[username] !== refresh) return res.json({ error: "bad" });
  const tok = token({ user: username }, "secret", "15m");
  res.json({ access: tok });
});

app.post("/logout", (req, res) => {
  const { token: t, session: s } = req.body;
  black(t);
  endSession(s);
  res.json({ ok: true });
});

app.get("/profile", (req, res) => {
  const t = req.headers.authorization;
  if (!t) return res.status(401).json({ error: "no" });
  if (isBlack(t)) return res.status(401).json({ error: "black" });

  const v = verify(t, "secret");
  if (!v) return res.status(401).json({ error: "bad" });

  const user = v.user;
  const info = users[user];
  res.json({
    user,
    email: info.email,
    totalMessages: getHistory(user).length
  });
});

app.post("/chat", (req, res) => {
  const ip = req.ip;
  if (limit(ip)) return res.status(429).json({ error: "limit" });

  const t = req.headers.authorization;
  if (!t) return res.status(401).json({ error: "no" });
  if (isBlack(t)) return res.status(401).json({ error: "black" });

  const v = verify(t, "secret");
  if (!v) return res.status(401).json({ error: "bad" });

  const user = v.user;
  const message = req.body.message || "";
  addHistory(user, "user", message);

  const past = getHistory(user)
    .map(x => x.role + ": " + x.msg)
    .join("\n");

  const reply = "Simulated AI Response\n" + past;
  addHistory(user, "ai", reply);

  res.json({
    id: id(),
    time: Date.now(),
    reply
  });
});

app.get("/history", (req, res) => {
  const t = req.headers.authorization;
  if (!t) return res.status(401).json({ error: "no" });

  const v = verify(t, "secret");
  if (!v) return res.status(401).json({ error: "bad" });

  const user = v.user;
  res.json({ history: getHistory(user) });
});

app.post("/clear", (req, res) => {
  const t = req.headers.authorization;
  if (!t) return res.status(401).json({ error: "no" });

  const v = verify(t, "secret");
  if (!v) return res.status(401).json({ error: "bad" });

  const u = v.user;
  history[u] = [];
  res.json({ ok: true });
});

app.get("/session/check", (req, res) => {
  const s = req.headers["x-session"];
  res.json({ valid: validSession(s) });
});

app.get("/session/end", (req, res) => {
  const s = req.headers["x-session"];
  endSession(s);
  res.json({ ended: true });
});

app.get("/keys", (req, res) => {
  const k = crypto.randomBytes(24).toString("hex");
  res.json({ api: k });
});

app.get("/time", (req, res) => {
  res.json({ now: Date.now() });
});

app.get("/users", (req, res) => {
  res.json({ total: Object.keys(users).length });
});

app.listen(5000);
