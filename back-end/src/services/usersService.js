const { users, Sequelize } = require('../database/models');

const getUsers = async () => {
  const result = await users.findAll();
  if (!result) return { code: 404, message: 'Not found' };
  return { code: 200, data: result };
};

const createUser = async (user) => {
  // verifica se o usuário já existe
  // material sobre uso do Sequelize.or: 
  // https://stackoverflow.com/questions/20695062/sequelize-or-condition-object#:~:text=Use%20Sequelize.or,%3A%2010%20%7D%20%7D%0A%20%20%20%20)%0A%20%20)%0A%7D%3B
  const { name, email } = user;
  const result = await users.findOne({
    where: Sequelize.or({ name, email }), 
    });
  if (result) return { code: 409, message: 'User already exists' };

  // cria o usuário
  const returnUser = await users.create(user);
  return { code: 201, returnUser, message: 'User created' };
};

const updateUser = async (id, user) => {
  await users.update(user, { where: { id } });
  return { code: 201, message: 'User updated' };
};

const deleteUser = async (id) => {
  await users.destroy({ where: { id } });
  return { code: 200, message: 'User deleted' };
};

module.exports = { getUsers, createUser, updateUser, deleteUser };