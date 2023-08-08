import { ErroApp } from "../../../../intermediarios/errosAssincronos.js";
import { compare } from "bcrypt";
import prisma from "../../../../repositorios/prisma/clientePrisma.js";

//Registra no log o sucesso do login com usuário, data e hora.
const registrarLog = async(email, tentativa) => {
   
   await prisma.log.create({data:{
    email,
    sucesso: tentativa,
    dataDaTentativa: new Date(),
  }}); 
}

const login = async (email, senha) => {

  email = email.toLowerCase();

  //Conexão com o banco de dados
  await prisma.$connect();

  //Verifica se o usuário existe pelo e-mail
  let usuarioExiste = await prisma.usuarios.findUnique({ where: { email } });

  // Tratamento caso o usuário não exista
  if (!usuarioExiste) {
    registrarLog(email, false);
    throw new ErroApp(401, "Usuário ou senha incorretos! Tente novamente.");
  }

  //Verifica a senha do usuário
  let senhaEmBanco = usuarioExiste.senha;
  let senhaIncorreta = await compare(senha, senhaEmBanco);
  senhaIncorreta = !senhaIncorreta;

  //Tratamento de senha incorreta
  if (senhaIncorreta) {
    registrarLog(email, false);
    throw new ErroApp(401, "Usuário ou senha incorretos! Tente novamente.");
  } 

  registrarLog(email, true);

  //Desconexão com o banco de dados
  await prisma.$disconnect();

  //Caso de sucesso do login
  return {resposta: `Usuário ${email} logado com sucesso!`, usuario: usuarioExiste};
};

export default login;
