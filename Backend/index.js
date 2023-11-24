const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const healthcareaiModel = require("./modals/Register");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://khushit1108:Wicked49@cluster0.lsre2un.mongodb.net/Healthcare",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.get("/", (req, res) => {
  const { email, password } = req.body;
  healthcareaiModel
    .find({ email: email })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json("Internal server error"));
});

app.post("/register", (req, res) => {
  // const { name, email, password } = req.body;
  healthcareaiModel
    .create(req.body)
    .then((healthcare) => res.json(healthcare))
    .catch((err) => res.status(500).json("Internal server error"));
});


app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
