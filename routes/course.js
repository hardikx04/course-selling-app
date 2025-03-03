const { Router } = require("express");

const courseRouter = "Router";

courseRouter.post("/routes/course/purchase", function (req, res) {
  //you would expect the user to pay you money
  res.json({
    message: "signup endpoint",
  });
});

courseRouter.get("/routes/courses/preview", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
