const express = require("express");
const releaseRoutes = require("./routes/releases");

const app = express();
app.use(express.json());

app.use("/api/releases", releaseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Release Tracker API running on port ${PORT}`);
});
