const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Avaliacao = sequelize.define('Avaliacao', {
    idAvaliacao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    pontuacao: {
      type: DataTypes.TINYINT(5),
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
  }, {
    tableName: 'Avaliacao',
    timestamps: false,
  });

  return Avaliacao;
};