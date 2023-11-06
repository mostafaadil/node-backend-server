const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poster_awareds', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    award_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'awards',
        key: 'id'
      }
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'poster_awareds',
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
        name: "award_id",
        using: "BTREE",
        fields: [
          { name: "award_id" },
        ]
      },
      {
        name: "poster_id",
        using: "BTREE",
        fields: [
          { name: "poster_id" },
        ]
      },
    ]
  });
};
