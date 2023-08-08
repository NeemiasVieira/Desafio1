import prisma from "../../../../repositorios/prisma/clientePrisma.js";

const excluirLogs = async () => {
  //Conexão com o banco de dados
  await prisma.$connect();

  //Exclui todos os registros
  await prisma.log.deleteMany();

  //Desconexão com o banco de dados
  await prisma.$disconnect();
};

export default excluirLogs;
