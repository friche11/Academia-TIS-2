const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Pagamento = sequelize.define('Pagamento', {
    idPagamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    metodo_pagamento: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    valor_aula: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  }, {
    tableName: 'Pagamento',
    timestamps: false,
  });

  return Pagamento;
};
