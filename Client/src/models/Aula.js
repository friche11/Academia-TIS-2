const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Aula = sequelize.define('Aula', {
    idAula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    horario: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  }, {
    tableName: 'Aula',
    timestamps: false,
  });

  return Aula;
};