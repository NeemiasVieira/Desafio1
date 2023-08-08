import listarLogs from "./listarLogs.js";

const listarLogsControlador = async (requisicao, resposta) => {
    const respostaDaListagem = await listarLogs();
    resposta.json(respostaDaListagem).status(200);

}

export default listarLogsControlador;