const router = require("express").Router();
const User = require("../models/Users");
const Posts = require("../models/Posts");
const bcrypt = require("bcrypt");

//UPDATE
router.patch("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      // jeszcze raz zmieniamy haslo na ciag znakow bo update jest calego usera
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          //update all fields
          $set: req.body,
        },
        //update user in db
        { new: true }
      );
      res.status(200).json("Username has been updated!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        //kasujemy usera i posty
        await Posts.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json(`User has been deleted!`);
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
