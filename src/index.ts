import express from "express";
import router from "./routes/index";
const app = express();
const port = 3000;
app.use("/", router);
app.get("/", (req, res) => {
  res.send("بسم الله الرحمن الرحيم");
});
app.listen(port, () => {
  console.log(`Server is working @ localhost:${port}`);
});
