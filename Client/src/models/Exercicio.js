const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Exercicio = sequelize.define('Exercicio', {
    idExercicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    numero_repeticoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numero_series: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descanso_entre_serie: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'Exercicio',
    timestamps: false,
  });

  return Exercicio;
};
