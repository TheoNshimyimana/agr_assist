function formatMessage(msg) {
  return msg.trim();
}

function randomId() {
  return Math.random().toString(36).slice(2);
}

function timestamp() {
  return Date.now();
}

module.exports = {
  formatMessage,
  randomId,
  timestamp
};
