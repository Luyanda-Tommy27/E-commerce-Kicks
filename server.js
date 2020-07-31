const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "We thank you for visiting our Sneakers API, WELCOME!!!" })
);

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/sneakers", require("./routes/sneakers"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));