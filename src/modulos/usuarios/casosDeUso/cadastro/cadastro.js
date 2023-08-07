import { ErroApp } from "../../../../intermediarios/errosAssincronos.js";
import usuarios from "../../../../repositorios/usuarios.js";
import { hash } from "bcrypt";

//Função que verifica se a senha do cadastro é segura
const senhaSegura = (senha) => {
  //Função responsável por verificar as políticas de segurança de senhas
  // Verifica se a senha tem pelo menos 8 caracteres
  if (senha.length < 8) return false;
  // Verifica se há pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(senha)) return false;
  // Verifica se há pelo menos um caractere especial
  if (!/[\W_]/.test(senha)) return false;
  // Verifica se há pelo menos um número
  if (!/\d/.test(senha)) return false;

  return true; //Caso não entre em nenhuma condição de falha de segurança retorna true
};

//Função que formata a date nativa do JavaScript para nomenclatura brasileira
const formatarDataHora = (data) => {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = String(data.getFullYear());
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${ano} | ${horas}:${minutos}:${segundos}`;
}

//Função responsável pela criptografia de senha
const criptografar = (password) => hash(password, Number(process.env.PASSWORD_SALT));  

const cadastro = async (email, senha) => {
  email = email.toLowerCase();

  //Verifica se já existe um usuário com o mesmo e-mail da tentativa de cadastro
  let usuarioExiste = usuarios.find((usuarioExiste) => {
    return usuarioExiste.email === email;
  });

  //Caso já exista um usuário com o esse e-mail, uma mensagem é exibida.
  if (usuarioExiste)
    throw new ErroApp(400, `O nome de usuario: ${email} já está cadastrado no sistema.`);

  //Tratamento de e-mail não corporativo
  if (!email.endsWith("@modalgr.com.br")) {
    throw new ErroApp(400, "O e-mail de cadastro precisa ser da ModalGR");
  }

  //Guarda nessa variável se a senha é segura ou não, utilizando a função de validação
  let senhaEstaSegura = senhaSegura(senha);

  //Tratamento de senha não segura
  if (!senhaEstaSegura) {
    let mensagem = "A senha precisa conter pelo menos um caractere especial, uma letra maiuscula, 8 caracteres e um número, tente novamente.";
    throw new ErroApp(400, mensagem);
  }

  let dataDeCriacao = formatarDataHora(new Date());
  let senhaCriptografada = await criptografar(senha);

  //Caso o cadastro atenda todas as condições, o usuário é cadastrado em memória
  usuarios.push({ email, senha: senhaCriptografada, dataDeCriacao });
  return `Usuário ${email} cadastrado com sucesso!`;
};

export default cadastro;
