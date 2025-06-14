const express = require("express");
const { default: mongoose } = require("mongoose");
const port = 5000;
const app = express();
const user = require("./Routes/User");
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/user", user);
mongoose
  .connect(
    "mongodb+srv://varshni1009:Mahavarshni@cluster0.myahujw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });
