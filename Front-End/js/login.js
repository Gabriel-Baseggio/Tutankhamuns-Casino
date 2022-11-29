document.getElementById('olho').addEventListener('click', function () {
    document.getElementById('inputSenha').type = 'text';
    document.getElementById('olho').hidden = "true";
    document.getElementById('olho2').removeAttribute('hidden');
});

document.getElementById('olho2').addEventListener('click', function () {
    document.getElementById('inputSenha').type = 'password';
    document.getElementById('olho2').hidden = "true";
    document.getElementById('olho').removeAttribute('hidden');
});

document.getElementById('btnVoltar').addEventListener('click', function () {
    window.location.href = "/"
});

let dadosFetch = null;

function dadosLogin() {
    const email = document.getElementById('inputEmail').value;
    const senha = document.getElementById('inputSenha').value;

    verificarLogin(email, senha, dadosFetch);
}

var verificarLogin = (email, senha, results) => {
    let verificacao = false;
    let idPerfil = null;

    for (let result of results) {
        if (email == result.email && senha == result.senha) {
            verificacao = true;
            idPerfil = result.id;
        }
    }

    if (verificacao) {
        localStorage.setItem('id', idPerfil);
        window.location.href = '/';
    } else {
        alert("Login inválido!")
    }
}

window.addEventListener("load", () => {
    fetch("http://localhost:8080/tutankhamun/perfil", {
        method: "GET",
        mode: 'cors',
        cache: "default"
    })
        .then(res => {
            res.json()
                .then(data => {
                    dadosFetch = data;
                })
        })
});