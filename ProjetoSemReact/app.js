// Carregando Modulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require('./routes/admin')
    const aluno = require('./routes/aluno')
    const personal = require('./routes/personal')
    const path = require('path')
    const Sequelize = require('sequelize')

// Configuracoes
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    // Conexao com MySQL
        const sequelize = new Sequelize('academia', 'root', '123456', {
            host: "localhost",
            dialect: 'mysql'
        })

        sequelize.authenticate().then(function(){
            console.log("Conectado com sucesso")
        }).catch(function(erro){
                console.log("Falha ao se conectar: "+erro)
        })

    // Public
    app.use(express.static(path.join(__dirname + "/public")))




// Rotas
app.get('/', (req,res)=>{
    res.render("cliente/index")
})

app.get('/cadastro', (req,res)=>{
    res.render('cliente/cadastro')
})

app.get('/login', (req,res)=>{
    res.render('cliente/login')
})

app.get('/politica-de-privacidade', (req,res)=>{
    res.render('cliente/politicaPrivacidade')
})
app.get('/politica-de-aulas-e-pagamentos', (req,res)=>{
    res.render('cliente/politicaAulasPagamentos')
})
app.use('/admin', admin)
app.use("/aluno", aluno)
app.use("/personal", personal)




// Outros
const PORT = 8081
app.listen(PORT, () =>{
    console.log("Servidor rodando!")
})