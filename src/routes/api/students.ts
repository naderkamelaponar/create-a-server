import express from "express";
const student = express.Router();
student.get("/", (req, res) => {
  res.json({
    Begin: "بسم الله الرحمن الرحيم",
    route: "You're in Students",
  });
});
student.get("/name", (req, res) => {
  res.json({
    Begin: "بسم الله الرحمن الرحيم",
    route: "You're in Students name",
  });
});
export default student;
