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
    window.location.href = "home.html"
});



// teste

const botao = document.getElementById("botaoTeste")

function dados(data) {
    console.log("Dados aq: ", data)
}

botao.addEventListener("click", () => {
    fetch("http://localhost:8080/tutankhamun/perfil", {
        method: "GET",
        mode: 'no-cors',
        cache: "default"
    })
        .then(res => {
            res.json().then(data => {
                    dados(data)
                })
        })
})




