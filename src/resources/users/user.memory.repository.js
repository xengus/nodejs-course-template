const { find, findIndex, assign, remove } = require('lodash');

const User = require('./user.model');

const users = [
  {
    id: '1',
    name: 'John',
    login: 'j123',
    password: 'p123P'
  },
  {
    id: '2',
    name: 'Matt',
    login: 'm123',
    password: 'm123M'
  }
];

const getAll = async () => users;

const getUser = async userId => find(users, { id: userId });

const updateUser = async (userId, data) => {
  const userInd = findIndex(users, { id: userId });
  users[userInd] = assign(users[userInd], data);
  return users[userInd];
};

const createUser = async data => {
  const user = new User(data);
  users.push(user);
  return user;
};

const deleteUser = async userId => {
  remove(users, { id: userId });
};

module.exports = {
  getAll,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
