const express = require("express");
const router = express.Router();

const releases = [];

router.post("/", (req, res) => {
  const {
    service,
    version,
    environment,
    status,
    commit,
    pipeline
  } = req.body;

  if (!service || !version || !environment || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const releaseEvent = {
    service,
    version,
    environment,
    status,
    commit,
    pipeline,
    timestamp: new Date().toISOString()
  };

  releases.push(releaseEvent);

  res.status(201).json({
    message: "Release recorded successfully",
    data: releaseEvent
  });
});

router.get("/", (req, res) => {
  res.json(releases);
});

module.exports = router;
