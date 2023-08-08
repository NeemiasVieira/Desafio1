import excluirUsuario from "./excluirUsuario.js";

const excluirUsuarioControlador = async (requisicao, resposta) => {
  const id = requisicao.params.id;
  await excluirUsuario(id);
  resposta.status(204).send();
};

export default excluirUsuarioControlador;
