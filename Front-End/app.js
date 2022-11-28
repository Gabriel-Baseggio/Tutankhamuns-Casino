const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/'))
app.use(express.json())

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306
})

// sql.query("use tutankhamun");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/components/home.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/components/cadastro.html');
});

app.get('/login', (req, res) => {
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

app.listen('8081', (req, res) => {
    console.log("servidor rodando 8081")
});