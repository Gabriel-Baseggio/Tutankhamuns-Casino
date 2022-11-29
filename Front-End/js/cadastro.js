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

const btn = document.getElementById("btnCadastrar");

btn.addEventListener("click", function () {
    const email = document.getElementById("inputEmail").value;
    const senha = document.getElementById("inputSenha").value;
    const cpf = document.getElementById("inputCpf").value;
    const nome = document.getElementById("inputNome").value;
    const jogos = 0;
    const nivel = 1;
    const saldo = 500;
    const vitorias = 0;
    const derrotas = 0;

    fetch("http://localhost:8080/tutankhamun/perfil",
        {
            method: "POST",
            body: JSON.stringify({ cpf, email, jogos, nivel, nome, saldo, senha, vitorias, derrotas }),
            headers: { "Content-Type": "application/json" }
        },
    )
        .then(res => {
        })

    alert("Cadastro feito com sucesso!")
    window.location.href = "/"
});







