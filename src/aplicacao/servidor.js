import express from "express";
import rotas from "./rotas.js";
import { ErrosComuns } from "../intermediarios/errosAssincronos.js";



const app = express();



app.use(express.json());
app.use(rotas);

app.use(ErrosComuns);


app.listen(process.env.PORT || 3333,"0.0.0.0", () => {
  console.log("▶️  Servidor iniciado com sucesso em http://localhost:3333 🆙");
});

