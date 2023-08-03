import express from "express";
import rotas from "./rotas.js";

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(process.env.PORT || 3333,"0.0.0.0", () => {
  console.log("🚀 Servidor está rodando na porta 3333");
});

