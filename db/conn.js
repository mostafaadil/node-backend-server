
          
            const Sequelize = require("sequelize")
            const initModels = require('../models/init-models.js')
            const sequelize = new Sequelize("gilogy", "root", "",
            { host: "localhost", dialect: "mysql" ,
            logging: function () {},
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
          
            define: {
                paranoid: true
            }});
            const conn = initModels(sequelize);
            module.exports ={conn,sequelize};



