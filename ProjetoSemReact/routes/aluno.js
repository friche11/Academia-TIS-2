const express = require("express")
const router = express.Router()
const Aluno = require('../models/Aluno.js')

router.get("/cadastro",(req,res)=>{
    res.render("aluno/confirmarCadastro")
})

router.post("/cadastro", (req, res)=>{
    const email = req.session.email
    const senha = req.session.password
    Aluno.create({
    nome_completo: req.body.nome,
    data_nascimento: req.body.date,
    email: email,
    genero: req.body.genero,
    senha: senha,
    altura: req.body.altura,
    peso: req.body.peso,
    idade: req.body.idade

    }).then((req, res) => {
        res.send("Post criado com sucesso")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })

})


module.exports = router