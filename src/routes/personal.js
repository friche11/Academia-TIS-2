const express = require("express")
const router = express.Router()
const Personal = require('../models/Personal.js')
const Ficha = require('../models/Ficha.js')
 const Exercicio = require('../models/Exercicio.js')
const bcrypt = require('bcryptjs')

router.get("/cadastro",(req,res)=>{
    res.render("personal/confirmarCadastro")
})

router.get('/montar-ficha', (req,res)=>{
  res.render('personal/montarFichas')
})

router.get('/fichas', (req, res)=>{
  res.render('personal/fichas')
})

router.get('/fichas-cadastradas', (req, res)=>{
  Ficha.findAll({
    include: ['Exercicio'],
    where: { personalId: req.session.personalId }, // Filtra as fichas pelo ID do personal logado
    order: [['date', 'DESC']],
  })
    .then((fichas) => {
      res.render('personal/verFichas', { fichas: fichas });
    })
    .catch((err) => {
      res.render('personal/verFichas')
    });
  
 
})

// Rota para criar uma nova ficha com exercícios
router.post('/montar-ficha', async (req, res) => {
  try {
    // Criação da ficha
    const ficha = await Ficha.create({
      nome: req.body.nome,
      grupo_muscular: req.body.grupoMuscular
    });

    // Criação dos exercícios relacionados à ficha
    for (let i = 0; i < req.body.exercicios.length; i++) {
      const exercicioData = req.body.exercicios[i];
      await Exercicio.create({
        
        nome_exercicio: exercicioData.nomeExercicio,
        numero_repeticoes: exercicioData.numeroRepeticoes,
        numero_series: exercicioData.numeroSeries,
        descanso_entre_series: exercicioData.descansoSeries,
        fichaId: ficha.id // Chave estrangeira para a ficha relacionada
      });
    }

    req.flash("success_msg", "Ficha criada com sucesso")
    res.redirect('/personal/fichas')
  } catch (error) {
    req.flash('error_msg', 'Erro ao criar ficha')
    res.redirect('/personal/fichas')
  }
});

router.post("/cadastro", (req, res) => {
    const email = req.session.email;
    const senha = req.session.senha;
  
    const camposObrigatorios = ['nome', 'idade', 'genero', 'date'];
    var erros = [];
  
    // Verificar se algum campo está vazio
    const camposVazios = camposObrigatorios.filter(campo => !req.body[campo]);
    if (camposVazios.length > 0) {
      erros.push({ texto: "Preencha os campos vazios" });
    }
  
    const reg = /^[A-Za-z]+$/
    if (!reg.test(req.body.nome)) {
        erros.push({ texto: "O campo 'nome' deve conter apenas letras!" });
    }


    if(!req.body.idade){
      
    }else if(req.body.idade > 119 || req.body.idade < 14 ){
      erros.push({ texto: "Insira uma idade válida" });
    }

    // Validar campo 'data de nascimento' e 'idade'
const dataNascimento = new Date(req.body.date);
const hoje = new Date();
const idade = hoje.getFullYear() - dataNascimento.getFullYear();

if (isNaN(dataNascimento.getTime())) {
    erros.push({ texto: "Insira uma data de nascimento" });
} else if (idade !== parseInt(req.body.idade)) {
    erros.push({ texto: "A idade informada não corresponde à data de nascimento" });
}

  if(erros.length > 0){
    res.render("personal/confirmarCadastro", {erros: erros})
  }else{
   
        bcrypt.genSalt(5, (err, salt) => {
          bcrypt.hash(senha, salt, (err, hash) => {
            
            Personal.create({
              nome_completo: req.body.nome,
              data_nascimento: req.body.date,
              email: email,
              genero: req.body.genero,
              senha: hash, // Usar o hash da senha em vez da senha original
              idade: req.body.idade
            })
                .then(() => {
                  
                  res.redirect('/')
                 
                })
                .catch((erro) => {
                  res.send("Houve um erro: " + erro);
                })
            
          })
        })
      }
      
    })

  

router.get("fichas", (req, res)=>{
    res.render("personal/fichas")
})

router.get("fichas/add",(req, res)=>{
    res.render("personal/addfichas")
})

module.exports = router