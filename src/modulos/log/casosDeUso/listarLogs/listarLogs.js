import prisma from "../../../../repositorios/prisma/clientePrisma.js";

const listarLogs = async () => {
  //Conexão com o banco de dados
  await prisma.$connect();

  //Lista todos os registros
  let logs = await prisma.log.findMany();

  //Garante que os logs mais recentes apareçam primeiro no relatório
  logs = logs.reverse();

  //Desconexão com o banco de dados
  await prisma.$disconnect();

  //Resposta da requisição
  return { resposta: "Relatório de tentativas de login", logs };
};

export default listarLogs;