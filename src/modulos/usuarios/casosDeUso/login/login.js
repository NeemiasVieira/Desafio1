import usuarios from "../../../../repositorios/usuarios.js";
import { ErroApp } from "../../../../intermediarios/errosAssincronos.js";
import { compare } from "bcrypt";


const login = async (email, senha) => {
 
  email = email.toLowerCase();

  //Verifica se existe um usuário com o mesmo nome
  let index = usuarios.findIndex((usuario, index) => {
    return usuario.email === email ? index : false;
  });

  //Verifica se o usuário existe ou não baseado no retorno do index encontrado;
  let UsuarioNaoExiste = (index === -1 ? true : false);

  // Caso o usuário não exista
  if (UsuarioNaoExiste) {
    throw new ErroApp(401, "Usuário ou senha incorretos! Tente novamente.");
  }

  let senhaEmBanco = usuarios[index].senha;
  let senhaIncorreta = await compare(senha, senhaEmBanco);
  senhaIncorreta = !senhaIncorreta;
  
  //Verifica a senha do usuário
  if (senhaIncorreta) {
    throw new ErroApp(401, "Usuário ou senha incorretos! Tente novamente.");
  }
  return `Usuário ${email} logado com sucesso!`;
};

export default login;
