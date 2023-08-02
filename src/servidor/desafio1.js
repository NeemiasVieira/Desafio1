import usuarios from "../repositorios/usuarios.js"
import { hash, compare } from "bcrypt";


const logar = (username, password) => { //Função responsável pelo Login do usuário

    //Verifica se existe um usuário com o mesmo nome
  let usernameExists = usuarios.findIndex((usuario, index) => {
    return usuario.username === username ? index : false;
  });

  if (usernameExists === -1) usernameExists = null; //Transforma o -1 em null para melhor semântica da próxima condição

  if (usernameExists) { //Se o usuário existir, a senha é verificada, retornando true ou false.
    usuarios[usernameExists].password === password ? console.log(`Usuário ${username} logado com sucesso!`) : console.log("Usuário ou senha incorretos! Tente novamente.");
    return usuarios[usernameExists].password === password ? true : false //Só a condição já retorna true ou false
  } 
  console.log("Usuário ou senha incorretos! Tente novamente."); //Caso o usuário não exista
  return false; // Pode ser movida a linha 12
};

const cadastrar = (username, password) => { //Função responsável por cadastrar novos usuários

    const safePasswordChecker = (password) => { //Função responsável por verificar as políticas de segurança de senhas
        // Verifica se a senha tem pelo menos 8 caracteres
        if (password.length < 8) return false 
        // Verifica se há pelo menos uma letra maiúscula
        if (!/[A-Z]/.test(password)) return false;
        // Verifica se há pelo menos um caractere especial
        if (!/[\W_]/.test(password)) return false;
        // Verifica se há pelo menos um número
        if (!/\d/.test(password)) return false;  
    
        return true; //Caso não entre em nenhuma condição de falha de segurança retorna true
      }
  let passwordIsSafe = safePasswordChecker(password) //Guarda nessa variável se a senha é segura ou não
  username = username.toLowerCase(); //Garante que todos os caracteres do e-mail sejam letras minúsculas  
  
  if (!passwordIsSafe){ //Tratamento de senha não segura
    console.log("A senha precisa conter pelo menos um caractere especial, uma letra maiuscula, 8 caracteres e um número, tente novamente.")
    return false;
  }
  
  if (!username.includes("@modalgr.com.br")){ //Tratamento de e-mail não corporativo //@modalgr.com.br@outlook.com
    console.log("O e-mail de cadastro precisa ser da ModalGR")
    return false;
  }
  
  let user = usuarios.find((user) => { //Verifica se já existe um usuário com o mesmo e-mail da tentativa de cadastro
    return user.username === username;
  });
  
  if (!user) { //Caso não exista um usuário com o mesmo nome, o usuário é cadastrado em memória
    usuarios.push({
      username,
      password,
    });
    console.log(`Usuário ${username} cadastrado com sucesso!`)
  } else
    console.log(`O nome de usuario: ${username} já está cadastrado no sistema.`); //Caso já exista um usuário com o esse e-mail, uma mensagem é exibida.
};


const criptografar = async (password) => await hash(password, Number(process.env.PASSWORD_SALT))  






// logar("ellen@modalgr.com.br", "abcdef");
// cadastrar("Teste@modalgr.com.br", "Jeremias@345")
// cadastrar("ellen@modalgr.com.br", "Jeremias@345");
cadastrar("jere@modalgr.com.br", criptografar("Balao1234_@"))

const senhaCripto = criptografar(senha)
console.log(usuarios)

