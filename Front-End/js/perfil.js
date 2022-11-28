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


// verificar o id do cara para passar nos parametros

window.addEventListener("load", () => {
    fetch("http://localhost:8080/tutankhamun/perfil/1", {
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