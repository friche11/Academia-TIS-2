
const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "password",
    database: "", //colocar nome do banco de dados
})

app.use(express.json())

app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
});

app.listen(3001, () => {
    console.log("Rodando na porta 3002")
})