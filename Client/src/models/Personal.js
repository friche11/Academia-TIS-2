const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Personal = sequelize.define('Personal', {
    idPersonal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nome_completo: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    genero: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    idade: {
      type: DataTypes.TINYINT(3),
      allowNull: false,
    },
  }, {
    tableName: 'Personal',
    timestamps: false,
  });

  return Personal;
};