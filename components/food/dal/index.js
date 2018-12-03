let foodDAL = {};

foodDAL.getAllFood = require('./getAllFoodDAL');
foodDAL.getFoodById = require('./getFoodByIdDAL');
foodDAL.getFoodByName = require('./getFoodByNameDAL');
foodDAL.createNewFood = require('./createNewFoodDAL');
foodDAL.updateFood = require('./updateFoodDAL');
foodDAL.deleteFood = require('./deleteFoodDAL');

module.exports = foodDAL;
