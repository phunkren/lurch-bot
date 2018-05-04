const { createServer } = require('http');
const { SERVER_PORT, BOT_APP_URL } = require('./util/constants');
const { logServerListening } = require('./util/logging');
const startLurchBot = require('./bots/lurch');
const server = createServer(() => {});

server.listen(SERVER_PORT, () => {
  logServerListening(SERVER_PORT);
  startLurchBot();
});

setInterval(() => {
  http.get(BOT_APP_URL);
}, 300000); // every 5 minutes
