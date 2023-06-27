const localStrategy = require("passport-local").Strategy;
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const passport = require('passport')

const db = require('../models/db.js')
const Aluno = require('../models/Aluno.js')
const Personal = require('../models/Personal.js')

// Configurar a conexão com o banco de dados MySQL
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'conectagym'
});

module.exports = function(passport) {
  passport.use('local', new localStrategy({ usernameField: 'email', passwordField: 'senha' }, (email, senha, done) => {
    Aluno.findOne({where: {email: email } }).then((aluno) => {
      if (!aluno) {
        Personal.findOne({where: {email: email } }).then((personal)=>{
          if(!personal){
            return done(null, false, { message: 'Essa conta não existe' });
          }else{
            const res = bcrypt.compare(senha, personal.senha, (err, resposta) =>{
              if (resposta) {
                return done(null, personal, 'personal');
              } else {
                return done(null, false, { message: 'Senha incorreta'});
              }
            })
          }
        }).catch((err) => {
          return done(err);
        });
        return; // Sair da função após enviar a resposta para o cliente
      }

      const res = bcrypt.compare(senha, aluno.senha, (err, resposta) => {
        if (resposta) {
          return done(null, aluno, 'aluno');
        } else {
          return done(null, false, { message: 'Senha incorreta'});
        }
      });
    })
    .catch((err) => {
      return done(err);
    });
  }));
};


  passport.serializeUser((user, done) => {
    const userType = user instanceof Aluno ? 'aluno' : 'personal';
    done(null, { id: user.id, userType: userType });
  });

  passport.deserializeUser((serializedUser, done) => {
    const { id, userType } = serializedUser;

    if (userType === 'aluno') {
      Aluno.findOne({where: {id: id}}).then((aluno) => {
        if (!aluno) {
          return done(null, false, {message: 'Aluno não encontrado'});
        } else {
          return done(null, aluno);
        }
      });
    } else if (userType === 'personal') {
      Personal.findOne({where: {id: id}}).then((personal) => {
        if (!personal) {
          return done(null, false, {message: 'Personal trainer não encontrado'});
        } else {
          return done(null, personal);
        }
      });
    } else {
      return done(null, false, {message: 'Tipo de usuário inválido'});
    }
  });



