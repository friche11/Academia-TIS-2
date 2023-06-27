const express = require("express")
const router = express.Router()
const Aluno = require('../models/Aluno.js')
const bcrypt = require('bcryptjs');

router.get("/cadastro",(req,res)=>{
    res.render("aluno/confirmarCadastro")
})

router.post("/cadastro", (req, res) => {
    const email = req.session.email;
    const senha = req.session.senha;
  
    const camposObrigatorios = ['nome', 'altura', 'peso', 'idade', 'genero', 'date'];
  var erros = [];

  // Verificar se algum campo está vazio
  const camposVazios = camposObrigatorios.filter(campo => !req.body[campo]);
  if (camposVazios.length > 0) {
    erros.push({ texto: "Preencha os campos vazios" });
  }

if(erros.length > 0){
  res.render("aluno/confirmarCadastro", {erros: erros})
}else{
 
      bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(senha, salt, (err, hash) => {
          
            Aluno.create({
              nome_completo: req.body.nome,
              data_nascimento: req.body.date,
              email: email,
              genero: req.body.genero,
              senha: hash, // Usar o hash da senha em vez da senha original
              altura: req.body.altura,
              peso: req.body.peso,
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
    }
    
  })

  



module.exports = router