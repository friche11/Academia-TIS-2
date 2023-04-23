const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "password",
    database: "", //colocar nome do banco de dados
})

app.get('/', (req, res) => {
    db.carry("INSERT INTO ")
});

app.listen(3002, () => {
    console.log("Rodando na porta 3002")
})