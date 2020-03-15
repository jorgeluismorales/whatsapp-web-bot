const sulla = require("sulla-hotfix");
const processMessages = require("./processMessages");

sulla
  .create("session", {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true
    // executablePath: "chromium-browser"
  })
  .then(client => processMessages(client));
