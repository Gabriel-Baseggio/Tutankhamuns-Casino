const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'tutankhamun_casino'
})

use = 'tutankhamun_casino'

app.use(express.static(__dirname + '/'))

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/components/home.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/components/cadastro.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/components/login.html');
});

app.get('/perfil', (req, res) => {
    res.sendFile(__dirname + '/components/perfil.html');
});

app.get('/ranking', (req, res) => {
    res.sendFile(__dirname + '/components/ranking.html');
});

app.get('/cacaniquel', (req, res) => {
    res.sendFile(__dirname + '/components/cacaniquel.html');
});

app.put('/cacaniquelput', (req, res) => {
    console.log("req.body no put: ", req.body)
    sql.query("update perfil set saldo = ?, jogos = ?, vitorias = ?, derrotas = ?, nivel = ? where id = ?", [req.body.saldo, req.body.jogos, req.body.vitorias, req.body.derrotas, req.body.nivel, req.body.id], (error, results, fields) => {
    });
});

app.listen('8081', (req, res) => {
    console.log("servidor rodando 8081")
});