const db = require('./db')

const Aluno = db.sequelize.define('alunos',{
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
    altura: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
    peso: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
    idade: {
        type:db.Sequelize.INTEGER,
        allowNull: false
    },
    //personalId: {
        //type: db.Sequelize.INTEGER,
        //allowNull: true
    //}

})

//Aluno.sync({force: true})



module.exports = Aluno;