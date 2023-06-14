const db = require('./db')

const Personal = db.sequelize.define('personais',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_completo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    email: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    genero: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type:db.Sequelize.INTEGER,
        allowNull: false
    },

})

//Personal.sync({force: true})

module.exports = Personal