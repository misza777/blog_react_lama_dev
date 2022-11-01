const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();

//mozliwosc przesylania obiektow json
app.use(express.json());

// polaczenie z mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for requests after connectiong to mongo
    app.listen(process.env.PORT, () => {
      useCreateIndex: true,
        console.log(
          "Misha! I am working dude! connected to MongoDB and listening on port",
          process.env.PORT
        );
    });
  })
  .catch((error) => console.log(error));

//multer - middleware do przesylania plikow
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// login, register
app.use("/api/auth", authRoute);
// update delete ...
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
