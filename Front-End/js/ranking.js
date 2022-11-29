document.getElementById('btnVoltar').addEventListener('click', function () {
    window.location.href = "/home"
});

document.getElementById('pesquisarJogos').addEventListener('input', () => {
    let pesquisa = document.getElementById("pesquisarJogos").value.toUpperCase()
    let tbody = document.getElementById("tbody");
    let tr = tbody.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            let txtTbl = td.textContent || td.innerText;
            if (txtTbl.toUpperCase().indexOf(pesquisa) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
})

let posicao = 1;

var dados = (results) => {
    const tbody = document.getElementById("tbody");

    for (let result of results.content) {

        let tr = document.createElement("tr");
        let tdPosicao = document.createElement("td");
        if (posicao == 1) {
            tdPosicao.id = 'primeiro'
        } else if (posicao == 2) {
            tdPosicao.id = 'segundo'
        } else if (posicao == 3) {
            tdPosicao.id = 'terceiro'
        } else {
            tdPosicao.className = 'foraPodio'
        }
        let tdNome = document.createElement("td");
        let tdSaldo = document.createElement("td");
        tdSaldo.className = 'tdSal'

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