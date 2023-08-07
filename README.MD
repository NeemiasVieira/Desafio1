# Desafio 1 - Processo de Formação

O primeiro desafio do processo de formação foi criar um sistema de autenticação que utilizasse ao menos dois objetos, manipulação de arrays e funções de callbacks

## 📦 Implementação

A parte lógica funcional foi feita primeiro, em forma de rascunho, e depois de testado foi refatorado para uma nova arquitetura de organização de pasta e arquivos, alguns outras features também foram implementadas.

Features adicionais:
- Ao cadastrar o usuário precisa utilizar um e-mail da ModalGR
- Ao cadastrar o usuário precisa digitar uma senha considerada segura pelo sistema
- O usuário só pode cadastrar um e-mail caso ele não tenha sido previamente cadastrado
- Ao tentar realizar login com email ou senha errados, uma mensagem de erro não especifica se é o email ou senha que estão incorretos por questões de segurança
- Arquitetura clean e organizada
- As senhas são salvas de forma criptografada, e o salto é guardado no .env
- É possível listar todos os usuários, e eles também serão exibidos em ordem alfabética.
- Todos os erros esperados são devidamente tratados com o status code HTTP corretos e com mensagens possibilitando a identificação do erro.
- Ao criar um usuário, sua data de criação é salva no formato brasileiro.

## 🛠️ Construído com

<strong>NodeJs (v18.17.0)</strong>

<strong>Autor: Neemias Vieira</strong>

<strong>Dependências:</strong>

* [express](https://www.npmjs.com/package/express) - Faz o papel de servidor.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Utilizado para criptografia de senhas.
* [vercel](https://www.npmjs.com/package/vercel) - Utilizado para deploy da aplicação.

<strong>Dependências de desenvolvimento:</strong>

* [nodemon](https://www.npmjs.com/package/nodemon) - Utilizado para reiniciar o servidor sempre que algum arquivo é alterado.


## 📄 Licença

Este projeto está sob a licença MIT.

## ⚙️ Rotas da API.

<strong>Todas as rotas</strong>

Função: Listar usuários cadastrados.<br>
Rota: https://desafio1-neemiasvieira.vercel.app/usuarios<br>
Tipo de requisição: GET<br>
Retorna todos os usuários cadastrados em ordem alfabética.<br>
<br>
Função: Cadastrar usuário.<br>
Rota: https://desafio1-neemiasvieira.vercel.app/cadastro<br>
Tipo de requisição: POST<br>
Aguarda no corpo da requisição um objeto JSON contendo valores para as propiedades: email e senha.<br>
retorna um objeto JSON contendo: A mensagem enviada de volta pelo sistema.<br>
<br>
Função: Fazer login.<br>
Rota: https://desafio1-neemiasvieira.vercel.app/login<br>
Tipo de requisição: POST<br>
Aguarda no corpo da requisição um objeto JSON contendo valores para as propiedades: email, senha.<br>
retorna um objeto JSON contendo: A mensagem enviada de volta pelo sistema.<br>
<br>
