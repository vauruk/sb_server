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
      return res.send("<center><b>Teste de backend de Vanderson Vauruk essa rota esta acessivel!</b> </center>");
    });
    this.express.get("/contacts/:search", ContactController.index);
  }
}

export default new App().express;

