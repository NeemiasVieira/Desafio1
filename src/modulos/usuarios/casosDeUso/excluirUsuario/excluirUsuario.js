import prisma from "../../../../repositorios/prisma/clientePrisma.js";
import { ErroApp } from "../../../../intermediarios/errosAssincronos.js";

const excluirUsuario = async (id) => {
  //Cria conexão com o banco de dados
  await prisma.$connect();

  //Verifica se existe um usuário com o id
  const usuario = await prisma.usuarios.findUnique({ where: { id } });

  //Tratamento caso não existir
  if (!usuario) throw new ErroApp(400, "Nenhum usuário encontrado com esse id");

  //Deleção do usuário no banco de dados
  await prisma.usuarios.delete({ where: { id } });

  //Desconexão com o banco de dados
  await prisma.$disconnect();
};

export default excluirUsuario;
