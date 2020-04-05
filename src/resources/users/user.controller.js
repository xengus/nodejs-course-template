const { isNil } = require('lodash');

const userService = require('./user.service');

const User = require('./user.model');

const getUsers = async (req, res) => {
  const users = await userService.getAll();
  res.json(users.map(User.toResponse));
};

const getUser = async (req, res) => {
  const user = await userService.getUser(userId);
  const { userId } = req.params;
  if (!isNil(user)) {
    res.json(User.toResponse(user));
  } else {
    res.json({});
  }
};

const updateUser = async (req, res) => {
  const {
    body,
    params: { userId }
  } = req;
  const user = await userService.updateUser(userId, body);
  if (!isNil(user)) {
    res.json(User.toResponse(user));
  } else {
    res.json({});
  }
};

const createUser = async (req, res) => {
  const { body } = req;
  const user = await userService.createUser(body);
  res.json(User.toResponse(user));
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  await userService.deleteUser(userId);
  res.status(404).send();
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
