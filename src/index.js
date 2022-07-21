const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/server-info", (req, res) => {
  const date = new Date();

  res.json({
    hour: date.toTimeString(),
    date: date.toDateString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hostName: req.hostname,
    ip: req.ip,
  });
});

const server = app.listen(port);

module.exports = { app, server };
