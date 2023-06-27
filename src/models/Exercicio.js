const db = require('./db')
const Ficha = require('../models/Ficha.js')


const Exercicio = db.sequelize.define('exercicios',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_exercicio: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    numero_repeticoes: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    numero_series: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    descanso_entre_series: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
   


})

Exercicio.belongsTo(Ficha, {foreignKey: 'fichaId', allowNull: false});

//Exercicio.sync({force: true})



module.exports = Exercicio;