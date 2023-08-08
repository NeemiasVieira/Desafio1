import { ErroApp } from "../../../../intermediarios/errosAssincronos.js";
import { compare } from "bcrypt";
import prisma from "../../../../repositorios/prisma/clientePrisma.js";

const login = async (email, senha) => {
  email = email.toLowerCase();
  await prisma.$connect();

  let usuarioExiste = await prisma.usuarios.findUnique({ where: { email } });

  // Caso o usuário não exista
  if (!usuarioExiste) {
    throw new ErroApp(401, "Usuário ou senha incorretos! Tente novamente.");
  }

  //Verifica a senha do usuário
  let senhaEmBanco = usuarioExiste.senha;
  let senhaIncorreta = await compare(senha, senhaEmBanco);
  senhaIncorreta = !senhaIncorreta;

  //Tratamento de senha incorreta
  if (senhaIncorreta) {
    throw new ErroApp(401, "Usuário ou senha incorretos! Tente novamente.");
  }

  //Caso de sucesso do login
  return `Usuário ${email} logado com sucesso!`;
};

export default login;
