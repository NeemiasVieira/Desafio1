import { Router } from "express";
import { errosAssincronos } from "../intermediarios/errosAssincronos.js";
import listaUsuariosControlador from "../modulos/usuarios/casosDeUso/listarUsuarios/listaUsuariosControlador.js";
import cadastroControlador from "../modulos/usuarios/casosDeUso/cadastro/cadastroControlador.js";
import loginControlador from "../modulos/usuarios/casosDeUso/login/loginControlador.js"
import excluirUsuarioControlador from "../modulos/usuarios/casosDeUso/excluirUsuario/excluirUsuarioControlador.js";
import excluirLogsControlador from "../modulos/log/casosDeUso/excluirLogs/excluirLogsControlador.js";
import listarLogsControlador from "../modulos/log/casosDeUso/listarLogs/listarLogsControlador.js";

const rotas = Router();

//Rota padrão do dominio 
rotas.get("/" , (requisicao, resposta) => {
  resposta.send("✅ Desafio 1 realizado com sucesso! 🥳 - Confira a documentação para mais detalhes ")
})

//Rota de listagem de usuários.
rotas.get("/usuarios", errosAssincronos(async (requisicao, resposta) => {
  await listaUsuariosControlador(requisicao, resposta);
}));

//Rota de cadastramento de novos usuários.
rotas.post("/cadastro", errosAssincronos(async (requisicao, resposta) => {
  await cadastroControlador(requisicao, resposta);
}));

//Rota de login para usuários já cadastrados.
rotas.post("/login", errosAssincronos(async (requisicao, resposta) => {
  await loginControlador(requisicao, resposta);
}));

//Rota de exclusão de usuários.
rotas.delete("/excluir/:id", errosAssincronos(async (requisicao, resposta) => {
  await excluirUsuarioControlador(requisicao, resposta);
}));

//Rota de exclusão do relatório de log de logins.
rotas.delete("/excluirlogs", errosAssincronos(async (requisicao, resposta) => {
  await excluirLogsControlador(requisicao, resposta);
}));

//Rota de listagem de todos os itens contidos relatório.
rotas.get("/logs", errosAssincronos(async (requisicao, resposta) => {
  listarLogsControlador(requisicao, resposta);
}));

export default rotas;
