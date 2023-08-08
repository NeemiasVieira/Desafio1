import prisma from "../../../../repositorios/prisma/clientePrisma.js";

//Função que formata a date nativa do JavaScript para nomenclatura brasileira
const formatarDataHora = (data) => {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = String(data.getFullYear());
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  const segundos = String(data.getSeconds()).padStart(2, '0');

  return `${dia}/${mes}/${ano} | ${horas}:${minutos}:${segundos}`;
}

//Coloca a lista de usuários em ordem alfabética
const listaUsuarios = async () => {

  //Conexão com o banco de dados
  await prisma.$connect();
  
  //Encontra todos os usuarios cadastrados
  const usuarios = await prisma.usuarios.findMany();

  //A lista de usuários é colocada em ordem alfabetica
  const listaDeUsuarios =  usuarios.sort((a, b) => {
    if (a.email < b.email) return -1;
    if (a.email > b.email) return 1;
    return 0;
  });

  //Cada usuário tem sua data formatada para o formato brasileiro, permitindo uma melhor visualização
  listaDeUsuarios.forEach(usuario => {
    const data = usuario.dataDeCriacao;
    usuario.dataDeCriacao = formatarDataHora(data);   
  });
  
  //Desconexão com o banco de dados
  await prisma.$disconnect();
  return listaDeUsuarios;
};

export default listaUsuarios;
