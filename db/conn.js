
          
            const Sequelize = require("sequelize")
            const initModels = require('../models/init-models.js')
            const sequelize = new Sequelize("gilogy", "root", "",
            { host: "localhost", dialect: "mysql" });
            const conn = initModels(sequelize);
            module.exports ={conn,sequelize};



