const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  create,
  updateById,
  findOne,
  find,
};

async function findOne(options = {}) {
  return User.findOne({ where: options });
}

async function find(options = {}) {
  return User.findOne({ where: options });
}

async function updateById(userId, updates) {
  const user = await User.findByPk(userId);

  if (!user) return null;

  await user.update(updates);
  return user;
}

async function create(options) {
  return User.create(options);
}
