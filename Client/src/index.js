import React from "react";
import ReactDOM from "react-dom";
import { Sequelize } from "sequelize";
import Aluno from "./models/Aluno";
import Personal from "./models/Personal";
import Aula from "./models/Aula";
import Avaliacao from "./models/Avaliacao";
import Exercicio from "./models/Exercicio";
import Ficha from "./models/Ficha";
import Pagamento from "./models/Pagamento";

import Rotas from "./Routes/routes";

ReactDOM.render(<Rotas />, document.getElementById("root"));

const sequelize = new Sequelize(
  process.env.REACT_APP_MYSQL_DATABASE,
  process.env.REACT_APP_MYSQL_USERNAME,
  process.env.REACT_APP_MYSQL_PASSWORD,
  {
    host: process.env.REACT_APP_MYSQL_HOST,
    port: process.env.REACT_APP_MYSQL_DOCKER_PORT,
    logging: process.env.REACT_APP_APP_DEBUG ? console.log : false,
    dialect: "mysql",
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

const database = async function connect() {
  try {
    await sequelize.authenticate();

    if (process.env.REACT_APP_APP_DEBUG) {
      console.log(
        `\n--> Connection with '${process.env.REACT_APP_MYSQL_HOST}:${process.env.REACT_APP_MYSQL_DOCKER_PORT}/${process.env.REACT_APP_MYSQL_DATABASE}' established`
      );
    }
  } catch (error) {
    if (process.env.REACT_APP_APP_DEBUG) {
      console.error(
        `\nUnable to establish, check or re-sync connection with '${process.env.REACT_APP_MYSQL_HOST}:${process.env.REACT_APP_MYSQL_DOCKER_PORT}/${process.env.REACT_APP_MYSQL_DATABASE} with user '${process.env.REACT_APP_MYSQL_USERNAME}' and password '${process.env.REACT_APP_MYSQL_PASSWORD}!'`
      );
      console.error(error);
    }
  }
};

const syncModels = async () => {
    try {
      await sequelize.authenticate(); // Autentique a conexão com o banco de dados
  
      // Importe os modelos Sequelize
      const Aluno = AlunoModel(sequelize); // Passe o objeto sequelize como argumento
      const Personal = PersonalModel(sequelize);
      const Aula = AulaModel(sequelize);
      const Avaliacao = AvaliacaoModel(sequelize);
      const Exercicio = ExercicioModel(sequelize);
      const Ficha = FichaModel(sequelize);
      const Pagamento = PagamentoModel(sequelize);
  
      // Sincronize os modelos com o banco de dados
      await Aluno.sync();
      await Personal.sync();
      await Aula.sync();
      await Avaliacao.sync();
      await Exercicio.sync();
      await Ficha.sync();
      await Pagamento.sync();
  
      console.log("Models synchronized successfully");
    } catch (error) {
      console.error("Failed to sync models:", error);
    }
  };
  
  // Chame a função para importar e sincronizar os modelos
  syncModels();

export default database;
