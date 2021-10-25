import express from "express";
import cors from "cors";
import ContactController from "./controller/ContactController";

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.get("/", (req, res) => {
      return res.send("<center><b>Teste de backend de Vanderson Vauruk essa rota esta acessivel!</b> <br><br> <img src=https://s.gravatar.com/avatar/2cb7d5b139eafeed53f26caa89b631d2?s=80/>  </center>");
    });
    this.express.get("/contacts/:search", ContactController.index);
  }
}

export default new App().express;

