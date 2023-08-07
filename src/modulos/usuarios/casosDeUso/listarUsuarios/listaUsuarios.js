

//Coloca a lista de usuários em ordem alfabética
const listaUsuarios = (usuarios) => {
  return usuarios.sort((a, b) => {
    if (a.email < b.email) return -1;
    if (a.email > b.email) return 1;
    return 0;
  });
};

export default listaUsuarios;
