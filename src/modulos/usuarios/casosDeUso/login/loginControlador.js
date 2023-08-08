import login from "./login.js";

const loginControlador = async (requisicao, resposta) => {
  const { email, senha } = requisicao.body;
  const respostaDoLogin = await login(email, senha);
  resposta.status(200).json(respostaDoLogin);
};

export default loginControlador;
