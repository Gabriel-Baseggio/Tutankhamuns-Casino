document.getElementById('btnVoltar').addEventListener('click', function () {
    window.location.href = "/home"
});

let posicao = 1;

var dados = (results) => {
    const tbody = document.getElementById("tbody");

    for (let result of results.content) {

        let tr = document.createElement("tr");
        let tdPosicao = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdSaldo = document.createElement("td");
        
        tdPosicao.innerText = posicao++;
        tdNome.innerText = result.nome;
        tdSaldo.innerText = result.saldo;

        tr.appendChild(tdPosicao);
        tr.appendChild(tdNome);
        tr.appendChild(tdSaldo);

        tbody.appendChild(tr);
    }
}

window.addEventListener("load", () => {
    fetch("http://localhost:8080/tutankhamun/perfil/ordenarsaldo", {
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