# Projeto Register Users 📝🗒

Consiste em uma API de um banco de dados para produção de conteúdo para um blog. 

* Construída com Node.js, Express, Sequelize com MySQL e Docker
* Utilizando as práticas do REST
* Aplicada Arquitetura de Software, com as camadas de Modelo, de Serviço e de Controladores


### Instruções

- Para rodar o repositório localmente, realize o clone do projeto e utilize os comandos a seguir para inicializar o Docker, instalar as dependências e configurar o banco de dados:


npm run prestart // para criar o banco de dados e as migrações
npm run seed // para popular o banco de dados
docker-compose up -d --build
docker attach store_manager
npm install // para instalar as dependências
docker-compose down // para parar completamente a aplicação


E utilize os comandos a seguir para executar a aplicação:


npm start // para iniciar a aplicação
ou
npm run debug // para iniciar a aplicação em ambiente de desevilvimento


### Endpoints

#### Users

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorno todos os usuários cadastrados | http://localhost:3000/users |
|---|---|---|
| `POST` | Realiza o registro de um usuário | http://localhost:3000/users |
|---|---|---|
| `PUT` | Realiza o update do usuário | http://localhost:3000/users/:id |
|---|---|---|
| `DELETE` | Remove um usuário | http://localhost:3000/users/:id |

Na requisição POSTe PUT, é necessário informar a os dados o usuário no formato a seguir:

{
   “name”: “Nome do usuário”,
   “age”: “Idade do usuário”
   “email”: “Email do usuário”
   “description”: “Descrição do usuário”
   “adress”: “Endereço do usuário”
   “number”: “Número de endereço do usuário”
   “city”: “Cidade do usuário”
   “state”: “Estado do usuário”
   “country”: “País do usuário”
}
