const express = require("express")
const router = express.Router()
const Personal = require('../models/Personal.js')
const bcrypt = require('bcryptjs')

router.get("/cadastro",(req,res)=>{
    res.render("personal/confirmarCadastro")
})

router.post("/cadastro", (req, res) => {
    const email = req.session.email;
    const senha = req.session.senha;
  
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
              // Sucesso ao salvar o aluno no banco de dados
              res.redirect('/')
             
            })
            .catch((erro) => {
              res.send("Houve um erro: " + erro);
            })
        
      })
    })
  })
  

router.get("fichas", (req, res)=>{
    res.render("personal/fichas")
})

router.get("fichas/add",(req, res)=>{
    res.render("personal/addfichas")
})

module.exports = router