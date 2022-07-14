const express = require("express");
const app = express();
const port = 3000;

app.get("/server-info", (req, res) => {
  const date = new Date();

  res.jsonp({
    hour: date.toTimeString(),
    date: date.toDateString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hostName: req.hostname,
    ip: req.ip,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
