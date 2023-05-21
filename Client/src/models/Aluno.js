const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Aluno = sequelize.define('Aluno', {
    idAluno: {
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
    altura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    idade: {
      type: DataTypes.TINYINT(3),
      allowNull: false,
    },
  }, {
    tableName: 'Aluno',
    timestamps: false,
  });

  return Aluno;
};