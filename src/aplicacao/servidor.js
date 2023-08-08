import express from "express";
import rotas from "./rotas.js";
import { ErrosComuns } from "../intermediarios/errosAssincronos.js";
import prisma from "../repositorios/prisma/clientePrisma.js";

//Função que testa a conexão com o banco de dados
async function testaConexao() {
  try {
    await prisma.$connect();
    console.log('🆙 Conexão com o banco de dados estabelecida com sucesso =)');
  } catch (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro);
  } finally {
    await prisma.$disconnect();
  }
}


const app = express();

app.use(express.json());

app.use(rotas);
app.use(ErrosComuns);

testaConexao();

//Garante o inicio do servidor tanto em maquinas locais quanto em hospedagem na nuvem.
app.listen(process.env.PORT || 3333,"0.0.0.0", () => {
  console.log("▶️  Servidor iniciado com sucesso em http://localhost:3333 🆙");
});

