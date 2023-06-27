const db = require('./db')


const Ficha = db.sequelize.define('fichas',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    grupo_muscular: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    //personalId: {
        //type: db.Sequelize.INTEGER,
        //allowNull: true
    //}

})

//Ficha.sync({force: true})



module.exports = Ficha;