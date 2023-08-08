import excluirUsuario from "./excluirUsuario.js";

const excluirUsuarioControlador = async (requisicao, resposta) => {
  const id = requisicao.params.id;
  const respostaDaExclusao = await excluirUsuario(id);
  resposta.json(respostaDaExclusao).status(204);
};

export default excluirUsuarioControlador;
