const { Router } = require("express");

const userRouter = Router();

userRouter.post("/routes/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

userRouter.post("/routes/user/signin", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

userRouter.get("/routes/user/purchases", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
