const { Router } = require('express');
const { usersController } = require('../controllers');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);
usersRouter.post('/', usersController.createUser);
usersRouter.put('/:id', usersController.updateUser);
usersRouter.delete('/:id', usersController.deleteUser);

module.exports = usersRouter;