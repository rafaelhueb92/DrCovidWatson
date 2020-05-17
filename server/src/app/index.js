const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/doctor/", require("./router/watson.route"));
  }
}

module.exports = new App().app;
