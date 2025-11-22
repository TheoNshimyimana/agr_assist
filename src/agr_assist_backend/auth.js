const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

let refreshStore = {};
let blacklist = {};
let sessions = {};

function hashPassword(pw) {
  return bcrypt.hash(pw, 10);
}

function checkPassword(pw, hash) {
  return bcrypt.compare(pw, hash);
}

function generateAccessToken(payload, secret) {
  return jwt.sign(payload, secret, { expiresIn: "15m" });
}

function generateRefreshToken() {
  return crypto.randomBytes(32).toString("hex");
}

function saveRefreshToken(user, token) {
  refreshStore[user] = token;
}

function verifyToken(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}

function blacklistToken(token) {
  blacklist[token] = true;
}

function isBlacklisted(token) {
  return !!blacklist[token];
}

function generateSession(id) {
  sessions[id] = Date.now();
  return id;
}

function validSession(id) {
  return sessions[id] ? true : false;
}

function endSession(id) {
  delete sessions[id];
}

function generateAPIKey() {
  return crypto.randomBytes(20).toString("hex");
}

function otp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function maskEmail(email) {
  const parts = email.split("@");
  const name = parts[0];
  const domain = parts[1];
  const masked = name[0] + "***" + name[name.length - 1];
  return masked + "@" + domain;
}

function cleanUsername(name) {
  return name.replace(/[^a-zA-Z0-9_]/g, "");
}

function decodeToken(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}

function tokenRemaining(token, secret) {
  try {
    const d = jwt.verify(token, secret);
    return d.exp * 1000 - Date.now();
  } catch {
    return 0;
  }
}

function refreshAccess(user, oldToken, secret) {
  if (refreshStore[user] !== oldToken) return null;
  return generateAccessToken({ user }, secret);
}

module.exports = {
  hashPassword,
  checkPassword,
  generateAccessToken,
  generateRefreshToken,
  saveRefreshToken,
  verifyToken,
  blacklistToken,
  isBlacklisted,
  generateSession,
  validSession,
  endSession,
  generateAPIKey,
  otp,
  maskEmail,
  cleanUsername,
  decodeToken,
  tokenRemaining,
  refreshAccess
};
