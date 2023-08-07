import { Router } from "express";
import { errosAssincronos } from "../intermediarios/errosAssincronos.js";
import listaUsuariosControlador from "../modulos/usuarios/casosDeUso/listarUsuarios/listaUsuariosControlador.js";
import cadastroControlador from "../modulos/usuarios/casosDeUso/cadastro/cadastroControlador.js";
import loginControlador from "../modulos/usuarios/casosDeUso/login/loginControlador.js"

const rotas = Router();

//Rota de listagem de usuários
rotas.get("/usuarios", (requisicao, resposta) => {
  listaUsuariosControlador(requisicao, resposta);
});

//Rota de cadastramento de novos usuários
rotas.post("/cadastro", errosAssincronos(async (requisicao, resposta) => {
  await cadastroControlador(requisicao, resposta);
}));

//Rota de login para usuários já cadastrados
rotas.post("/login", errosAssincronos(async (requisicao, resposta) => {
  await loginControlador(requisicao, resposta);
}));

export default rotas;
