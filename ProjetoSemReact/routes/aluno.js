const express = require("express")
const router = express.Router()
const Aluno = require('../models/Aluno.js')

router.get("/cadastro",(req,res)=>{
    res.render("aluno/confirmarCadastro")
})

router.post("/cadastro", (req, res)=>{
Aluno.create({
    email: req.body.email,
    senha: senha.body.password
})
})


module.exports = router