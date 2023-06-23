const localStrategy = require("passport-local").Strategy;
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");

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
  passport.use(
    new localStrategy({ usernameField: 'email', passwordField: 'senha' }, (email, senha, done) => {
      Aluno.findOne({where: {email: email } }).then((aluno) => {
          if (!aluno) {
            console.log("erro")
            return done(null, false, { message: 'Essa conta não existe' });
          }

          const res = bcrypt.compare(senha, aluno.senha, (err, resposta) => {
            if (resposta) {
              return done(null, aluno);
            } else {
              return done(null, false, { message: 'Senha incorreta'});
            }
          })
        })
        .catch((err) => {
          return done(err);
        });
    })
  );

  // Passar dados do usuário autenticado para uma sessão
  passport.serializeUser((aluno, done) => {
    done(null, aluno.id);
  });

  passport.deserializeUser( (id, done) => {
    Aluno.findOne({where: {id: id}}).then((res)=>{
      if(res){
        return done(null, false, {message: 'Usuario nao encontrado'})
      }else{
        return done(null, res)
      }
    })
  });
};

module.exports = function(passport) {
  passport.use(
    new localStrategy({ usernameField: 'email', passwordField: 'senha' }, (email, senha, done) => {
      Personal.findOne({where: {email: email } }).then((personal) => {
          if (!personal) {
            console.log("erro")
            return done(null, false, { message: 'Essa conta não existe' });
          }

          const res = bcrypt.compare(senha, personal.senha, (err, resposta) => {
            if (resposta) {
              return done(null, personal);
            } else {
              return done(null, false, { message: 'Senha incorreta'});
            }
          })
        })
        .catch((err) => {
          return done(err);
        });
    })
  );

  // Passar dados do usuário autenticado para uma sessão
  passport.serializeUser((personal, done) => {
    done(null, personal.id);
  });

  passport.deserializeUser( (id, done) => {
    Personal.findOne({where: {id: id}}).then((res)=>{
      if(res){
        return done(null, false, {message: 'Usuario nao encontrado'})
      }else{
        return done(null, res)
      }
    })
  });
};

