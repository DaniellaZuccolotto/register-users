const { Request, Response } = require('express');
const { usersService } = require('../services');

const getUsers = async (_req = Request, res = Response) => {
  const result = await usersService.getUsers();

  return res.status(result.code).json(result.data);
};

const createUser = async (req = Request, res = Response) => {
  const result = await usersService.createUser(req.body);

  if(result.returnUser) return res.status(result.code)
    .json({ message: result.message, user: result.returnUser });

  return res.status(result.code).json(result.message);
};

const updateUser = async (req = Request, res = Response) => {
  const result = await usersService.updateUser(req.params.id, req.body);

  return res.status(result.code).json(result.message);
};

const deleteUser = async (req = Request, res = Response) => {
  const result = await usersService.deleteUser(req.params.id);

  return res.status(result.code).json(result.message);
};

module.exports = { getUsers, createUser, updateUser, deleteUser };