// Carregando Modulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require('./routes/admin')
    const aluno = require('./routes/aluno')
    const personal = require('./routes/personal')
    const path = require('path')
    const sequelize = require('sequelize')
    const session = require('express-session')
    const flash = require('connect-flash')
    const bcrypt = require('bcryptjs')
    const passport = require('passport')
    require("./config/auth.js")(passport)

   

// Configuracoes
    // Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())
    // Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    // MySQL
        const db = require('./models/db.js')
        const Aluno = require('./models/Aluno.js')
        const Personal = require('./models/Personal.js')
    // Sessao
        app.use(session({
            secret: "qualquercoisa",
            resave: true,
            saveUninitialized: true
        }))

        app.use(passport.initialize())
        app.use(passport.session())

        app.use(flash())
    // Middlewares
        app.use((req, res, next)=>{
            res.locals.success_msg = req.flash("sucess_msg")
            res.locals.error_msg = req.flash("error_msg")
            next()
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

app.post('/cadastro', (req, res) =>{
    const type = req.body.type
    const email = req.body.email
    const senha = req.body.senha

    req.session.email = email
    req.session.senha = senha

    if(type == 'aluno'){
res.redirect('/aluno/cadastro')
}
if(type == 'personal'){
    res.redirect('/personal/cadastro')
}
})

app.get('/login', (req,res)=>{
    res.render('cliente/login')
})

app.post('/login', (req, res, next)=>{
    passport.authenticate("local",{
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next)

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
    console.log("Servidor rodando na porta 8081!")
})