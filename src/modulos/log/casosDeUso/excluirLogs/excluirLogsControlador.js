import excluirLogs from "./excluirLogs.js";

const excluirLogsControlador = async(requisicao, resposta) => {
    const respostaDaExclusao = await excluirLogs();
    resposta.json(respostaDaExclusao).status(201);
}

export default excluirLogsControlador;