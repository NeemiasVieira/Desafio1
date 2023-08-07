import cadastro from "./cadastro.js";

const cadastroControlador = async (requisicao, resposta) => {
    const {email, senha} = requisicao.body;
    const respostaDoCadastro = await cadastro(email, senha);
    resposta.status(201).json(respostaDoCadastro);

}

export default cadastroControlador;