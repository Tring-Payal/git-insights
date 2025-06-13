const { createProbot } = require('probot');
const app = require('./app');
const fs = require('fs');
const GH_APP_PRIVATE_KEY = fs.readFileSync(process.env.GH_APP_PRIVATE_KEY_PATH, 'utf8');

const path = require('path');
/**
 * Probot comes bundled with Sentry. It's set by SENTRY_DSN env var
 * https://probot.github.io/docs/deployment/#error-tracking
 */

const probot = createProbot({
  id: process.env.GH_APP_ID,
  secret: process.env.GH_APP_WEBHOOK_SECRET,
  cert: GH_APP_PRIVATE_KEY,
});

probot.load(app);

module.exports = probot.server;