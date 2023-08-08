import listaUsuarios from "./listaUsuarios.js"

const listaUsuariosControlador = async (requisicao, resposta) => {
    const usuarios = await listaUsuarios();
    await resposta.status(200).json(usuarios);
}

export default listaUsuariosControlador;