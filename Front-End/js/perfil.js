function dados(result){
    const nome = document.getElementById("nomePerfil")
    const nivel = document.getElementById("nivelPerfil")
    const saldo = document.getElementById("coinsPerfil")
    const jogos = document.getElementById("jogosPerfil");
    const vitorias = document.getElementById("vitoriasPerfil");
    const derrotas = document.getElementById("derrotasPerfil");
    
    nome.innerText = result.nome;
    nivel.innerText = result.nivel;
    saldo.innerText = result.saldo;
    jogos.innerText = result.jogos;
    vitorias.innerText = result.vitorias;
    derrotas.innerText = result.derrotas;
}

function deslogar(){
    window.location.href = '/';
}

document.getElementById('btnVoltar').addEventListener('click', function () {
    window.location.href = "/home"
});

window.addEventListener("load", () => {
    const user = localStorage.getItem('id');

    fetch(`http://localhost:8080/tutankhamun/perfil/${user}`, {
        method: "GET",
        mode: 'cors',
        cache: "default"
    })
        .then(res => {
            res.json()
                .then(data => {
                    dados(data);
                })
        })
});