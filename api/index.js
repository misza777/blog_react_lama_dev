const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

//mozliwosc przesylania obiektow json
app.use(express.json())

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

app.use("/api/auth", authRoute);


