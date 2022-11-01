const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

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
// login, register
app.use("/api/auth", authRoute);
// update delete ...
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
