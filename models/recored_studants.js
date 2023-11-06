const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recored_studants', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    docoter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recordes',
        key: 'id'
      }
    },
    studant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recordes',
        key: 'id'
      }
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
    tableName: 'recored_studants',
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
        name: "docoter_id",
        using: "BTREE",
        fields: [
          { name: "docoter_id" },
        ]
      },
      {
        name: "studant_id",
        using: "BTREE",
        fields: [
          { name: "studant_id" },
        ]
      },
    ]
  });
};
