const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
//Routing in express, the express Router
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000);
