let userDAL = {};

userDAL.getAllUsers = require('./getAllUsersDAL');
userDAL.getUserById = require('./getUserByIdDAL');
userDAL.getUserByUsername = require('./getUserByUsernameDAL');
userDAL.createNewUser = require('./createNewUserDAL');
userDAL.updateUser = require('./updateUserDAL');
userDAL.deleteUser = require('./deleteUserDAL');
userDAL.addFoodPreference = require('./addUserFoodPreferenceDAL');

module.exports = userDAL;