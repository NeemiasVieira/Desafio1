import usuarios from "../../../../repositorios/usuarios.js"
import listaUsuarios from "./listaUsuarios.js";

const listaUsuariosControlador = (requisicao, resposta) => {
    resposta.status(200).send(listaUsuarios(usuarios));
}

export default listaUsuariosControlador;