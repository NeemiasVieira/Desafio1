import excluirLogs from "./excluirLogs.js";

const excluirLogsControlador = async (requisicao, resposta) => {
  await excluirLogs();
  resposta.status(204).send();
};

export default excluirLogsControlador;
