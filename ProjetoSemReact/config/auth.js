const localStrategy = require("passport-local").Strategy;
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");

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
      connection.execute('SELECT * FROM alunos WHERE email = ?', [email])
        .then(([rows, fields]) => {
          if (!rows.length) {
            return done(null, false, { message: 'Essa conta não existe' });
          }

          const alunos = rows[0];
          bcrypt.compare(senha, alunos.senha, (erro, batem) => {
            if (batem) {
              return done(null, alunos);
            } else {
              return done(null, false, { message: 'Senha incorreta' });
            }
          });
        })
        .catch((err) => {
          return done(err);
        });
    })
  );

  // Passar dados do usuário autenticado para uma sessão
  passport.serializeUser((alunos, done) => {
    done(null, alunos.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const [rows, fields] = await connection.execute('SELECT * FROM alunos WHERE id = ?', [id]);
      if (!rows.length) {
        return done(null, false, { message: 'Aluno não encontrado' });
      }
      const alunos = rows[0];
      done(null, alunos);
    } catch (err) {
      done(err, null);
    }
  });
};
