const app = require("express").Router();

const watsonController = require("../controller/watson.controller");
const watsonMiddlewate = require("../middlewares/watson.middleware");

app.get("/getSession/", watsonController.getTicket);
app.post(
  "/sendMessage/",
  watsonMiddlewate.sessionIdIsValid,
  watsonController.talkToDoctor
);

module.exports = app;
