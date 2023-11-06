var DataTypes = require("sequelize").DataTypes;
var _awards = require("./awards");
var _cities = require("./cities");
var _countries = require("./countries");
var _poster_awareds = require("./poster_awareds");
var _recordes = require("./recordes");
var _records_log = require("./records_log");
var _recored_studants = require("./recored_studants");
var _states = require("./states");
var _unvarsecites = require("./unvarsecites");
var _users = require("./users");

function initModels(sequelize) {
  var awards = _awards(sequelize, DataTypes);
  var cities = _cities(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var poster_awareds = _poster_awareds(sequelize, DataTypes);
  var recordes = _recordes(sequelize, DataTypes);
  var records_log = _records_log(sequelize, DataTypes);
  var recored_studants = _recored_studants(sequelize, DataTypes);
  var states = _states(sequelize, DataTypes);
  var unvarsecites = _unvarsecites(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  poster_awareds.belongsTo(awards, { as: "award", foreignKey: "award_id"});
  awards.hasMany(poster_awareds, { as: "poster_awareds", foreignKey: "award_id"});
  unvarsecites.belongsTo(cities, { as: "city", foreignKey: "city_id"});
  cities.hasMany(unvarsecites, { as: "unvarsecites", foreignKey: "city_id"});
  states.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(states, { as: "states", foreignKey: "country_id"});
  unvarsecites.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(unvarsecites, { as: "unvarsecites", foreignKey: "country_id"});
  users.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(users, { as: "users", foreignKey: "country_id"});
  records_log.belongsTo(recordes, { as: "record", foreignKey: "record_id"});
  recordes.hasMany(records_log, { as: "records_logs", foreignKey: "record_id"});
  recored_studants.belongsTo(recordes, { as: "docoter", foreignKey: "docoter_id"});
  recordes.hasMany(recored_studants, { as: "recored_studants", foreignKey: "docoter_id"});
  recored_studants.belongsTo(recordes, { as: "studant", foreignKey: "studant_id"});
  recordes.hasMany(recored_studants, { as: "studant_recored_studants", foreignKey: "studant_id"});
  cities.belongsTo(states, { as: "state", foreignKey: "state_id"});
  states.hasMany(cities, { as: "cities", foreignKey: "state_id"});
  unvarsecites.belongsTo(states, { as: "state", foreignKey: "state_id"});
  states.hasMany(unvarsecites, { as: "unvarsecites", foreignKey: "state_id"});
  recordes.belongsTo(unvarsecites, { as: "unvrecity", foreignKey: "unvrecity_id"});
  unvarsecites.hasMany(recordes, { as: "recordes", foreignKey: "unvrecity_id"});
  poster_awareds.belongsTo(users, { as: "poster", foreignKey: "poster_id"});
  users.hasMany(poster_awareds, { as: "poster_awareds", foreignKey: "poster_id"});
  records_log.belongsTo(users, { as: "poster", foreignKey: "poster_id"});
  users.hasMany(records_log, { as: "records_logs", foreignKey: "poster_id"});
  unvarsecites.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(unvarsecites, { as: "unvarsecites", foreignKey: "user_id"});

  return {
    awards,
    cities,
    countries,
    poster_awareds,
    recordes,
    records_log,
    recored_studants,
    states,
    unvarsecites,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
