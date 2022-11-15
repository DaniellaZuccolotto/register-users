# Projeto Register Users 📝🗒

Aplicação web construída contendo informações de usuários, em que é possível visualizar, adicionar, editar e remover.

* Construída com JavaScript, HTML, React, Context API, Hooks, Tailwind, Node.js, Express, Sequelize com MySQL;
* Utilizando as práticas do REST;
* Aplicada Arquitetura de Software, com as camadas de Modelo, de Serviço e de Controladores;

### Instruções

- Para rodar o repositório localmente, realize o clone do projeto e utilize os comandos a seguir para iniciar, instalar as dependências e configurar o banco de dados:
E utilize os comandos a seguir para executar a aplicação:
# Na pasta “back-end”:

```
npm install // para instalar as dependências
configurar as variáveis de ambiente do ".env" conforme seu banco de dados e retirar o ".example"
npm db:reset // para popular o banco de dados
npm start // para rodar o back-end localmente pelo node
npm run dev // para rodar o back-end localmente pelo nodemom
```

# Na pasta “front-end”:
```
npm install // para instalar as dependências
npm start // para iniciar a aplicação
```

### Endpoints

#### Users

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todos os usuários cadastrados | http://localhost:3001/users |
|---|---|---|
| `POST` | Realiza o registro de um usuário | http://localhost:3001/users |
|---|---|---|
| `PUT` | Realiza o update do usuário | http://localhost:3001/users/:id |
|---|---|---|
| `DELETE` | Remove um usuário | http://localhost:3001/users/:id |

Na requisição POST e PUT, é necessário informar os dados o usuário no formato a seguir:
```
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
```
