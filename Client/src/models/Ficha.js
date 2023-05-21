const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Ficha = sequelize.define('Ficha', {
    idFicha: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nome_ficha: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    grupo_muscular: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    tableName: 'Ficha',
    timestamps: false,
  });

  return Ficha;
};