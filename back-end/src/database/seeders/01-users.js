module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'João da Silva',
        age: 20,
        email: 'joaodasilva@mail.com',
        description: 'Joao da Silva description',
        adress: 'rua joao da silva',
        number: '20',
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil',  
      },
      {
        id: 2,
        name: 'Maria da Silva',
        age: 25,
        email: 'mariadasilva@mail.com',
        description: 'Maria da Silva description',
        adress: 'rua maria da silva',
        number: '25',
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil',
      },
      {
        id: 3,
        name: 'José da Silva',
        age: 30,
        email: 'josedasilva@mail.com',
        description: 'José da Silva description',
        adress: 'rua jose da silva',
        number: '30',
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil',
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};