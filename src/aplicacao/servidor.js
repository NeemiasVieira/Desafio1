import express from "express";
import rotas from "./rotas.js";
import { ErrosComuns } from "../intermediarios/errosAssincronos.js";
import prisma from "../repositorios/prisma/clientePrisma.js";

async function testConnection() {
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
testConnection();

const acharUsuario = async (email) => {
  await prisma.$connect();
  const usuario = await prisma.usuarios.create({data:{
    email: "danilo@modalgr.com.br",
    senha: "123456",
    dataDeCriacao: new Date()
  }})
  console.log(usuario);
  return usuario;
}

// acharUsuario("danilo@modalgr.com.br");


app.listen(process.env.PORT || 3333,"0.0.0.0", () => {
  console.log("▶️  Servidor iniciado com sucesso em http://localhost:3333 🆙");
});

