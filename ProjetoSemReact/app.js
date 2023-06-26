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
        const Ficha = require('./models/Ficha.js')
        const Exercicio = require('./models/Exercicio.js')
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
            res.locals.error = req.flash("error")
            next()
        })
    // Public
    app.use(express.static(path.join(__dirname + "/public")))


    // Relacionamentos
    Ficha.hasMany(Exercicio); // Relacionamento: uma ficha possui muitos exercícios
    Exercicio.belongsTo(Ficha); // Relacionamento: um exercício pertence a uma ficha

// Rotas
app.get('/', (req,res)=>{
    res.render("cliente/index")
})

app.get('/cadastro', (req,res)=>{
    res.render('cliente/cadastro')
})

app.get

app.post('/cadastro', (req, res) =>{
    var erros = []

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "E-mail inválido"})
    }

    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({texto: "Senha inválida"})
    }

    if(req.body.senha.length<4 && req.body.senha == null){
        erros.push({texto: "Senha muito curta"})
    }

    if(req.body.senha != req.body.confirmation){
        erros.push({texto: "Senhas não coincidem"})
    }

    if(!req.body.type || typeof req.body.type == undefined || req.body.type == null){
        erros.push({texto: "Identifique-se como aluno ou personal!"})
    }

      
    const type = req.body.type
    const email = req.body.email
    const senha = req.body.senha

    req.session.email = email
    req.session.senha = senha
    req.session.type = type

    Aluno.findOne({ where: { email: email } }).then((aluno) => {
        if (aluno) {
          erros.push({ texto: "Uma conta com esse email já existe" });
          res.render("cliente/cadastro", { erros: erros });
        } else {
          Personal.findOne({ where: { email: email } }).then((personal) => {
            if (personal) {
              erros.push({ texto: "Uma conta com esse email já existe" });
              res.render("cliente/cadastro", { erros: erros });
            } else {
              // Se o email não estiver cadastrado, prosseguir com o registro
              req.session.email = email;
              req.session.senha = senha;
              req.session.type = type;
    
              if (type == 'aluno') {
                res.redirect('/aluno/cadastro');
              } else if (type == 'personal') {
                res.redirect('/personal/cadastro');
              }
            }
          });
        }
      });
    });

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