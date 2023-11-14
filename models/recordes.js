const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recordes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mid_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    unvrecity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unvarsecites',
        key: 'id'
      }
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    advisors: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'recordes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unvrecity_id",
        using: "BTREE",
        fields: [
          { name: "unvrecity_id" },
        ]
      },
    ]
  });
};
