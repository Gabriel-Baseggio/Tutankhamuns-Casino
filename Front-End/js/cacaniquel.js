var dadosFetch, cpf, email, senha, nome, saldo, jogos, vitorias, derrotas, nivel
var id = localStorage.getItem('id')

document.getElementById('btnVoltar').addEventListener('click', function () {
    window.location.href = "/home"
});

document.getElementById("btnJogar").addEventListener('click', () => {
    cpf = dadosFetch.cpf
    email = dadosFetch.email
    senha = dadosFetch.senha
    nome = dadosFetch.nome
    saldo = dadosFetch.saldo
    jogos = dadosFetch.jogos
    vitorias = dadosFetch.vitorias
    derrotas = dadosFetch.derrotas
    nivel = dadosFetch.nivel
    randomizar()
    console.log(saldo, jogos, vitorias, derrotas, nivel)
    atualizarDados()
})

window.addEventListener('mousemove', () =>{
    pegarDados()
})

document.getElementById("metade").addEventListener('click', () => {
    metade()
})

document.getElementById("dobro").addEventListener('click', () => {
    dobrar()
})

document.getElementById("btnMais").addEventListener('click', () => {
    maisUm()
})

document.getElementById("btnMenos").addEventListener('click', () => {
    menosUm()
})

function metade() {
    let valor = document.getElementById('inputAposta')
    valor.value = parseFloat(valor.value) * 0.5
}

function dobrar() {
    let valor = document.getElementById('inputAposta')
    valor.value = parseFloat(valor.value) * 2
}

function maisUm() {
    let valor = document.getElementById('inputAposta')
    valor.value = parseFloat(valor.value) + 1
}

function menosUm() {
    let valor = document.getElementById('inputAposta')
    valor.value = parseFloat(valor.value) - 1
}

function jogar(imgs, cont) {
    jogos++
    let valor = document.getElementById('inputAposta').value
    if (valor <= 0) {
        alert('Você deve apostar um valor maior que 0')
        return
    }
    let c = 0
    let result = document.getElementById('result')
    let img1 = document.getElementById('img1')
    let img2 = document.getElementById('img2')
    let img3 = document.getElementById('img3')
    let img4 = document.getElementById('img4')
    
    img1.src = imgs[0]
    img2.src = imgs[1]
    img3.src = imgs[2]
    img4.src = imgs[3]
    
    let i = 0
    let mult = 0
    result.innerText = ""
    saldo -= valor

    cont.forEach(simb => {
        if (simb >= 3) {
            c++
            switch (i) {
                case 0:
                    mult = 2 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    vitorias++
                    nivel++
                    break
                case 1:
                    mult = 4 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    vitorias++
                    nivel++
                    break
                case 2:
                    mult = 8 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    vitorias++
                    nivel++
                    break
                case 3:
                    mult = 16 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    vitorias++
                    nivel++
                    break
                case 4:
                    mult = 32 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    vitorias++
                    nivel++
                    break
                case 5:
                    mult = 64 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    vitorias++
                    nivel++
                    break
            }
        } else if (i == 5 && c < 1) {
            result.innerText = `Que pena você não ganhou nada!`
            derrotas++
        }
        i++
    });
}

function randomizar() {
    let simb1 = 52, simb2 = 78, simb3 = 90, simb4 = 96, simb5 = 99

    let num1 = parseInt(Math.ceil((Math.random() * 99 + 1)))
    let num2 = parseInt(Math.ceil((Math.random() * 99 + 1)))
    let num3 = parseInt(Math.ceil((Math.random() * 99 + 1)))
    let num4 = parseInt(Math.ceil((Math.random() * 99 + 1)))

    let numeros = [num1, num2, num3, num4]
    let c = [0, 0, 0, 0, 0, 0]

    let imgs = []

    numeros.forEach(numero => {
        if (numero <= simb1) {
            imgs.push('../img/coco.png')
            c[0]++
        } else if (numero <= simb2) {
            imgs.push('../img/cetro.png')
            c[1]++
        } else if (numero <= simb3) {
            imgs.push('../img/piramide.png')
            c[2]++
        } else if (numero <= simb4) {
            imgs.push('../img/farao2.png')
            c[3]++
        } else if (numero <= simb5) {
            imgs.push('../img/olho.png')
            c[4]++
        } else {
            imgs.push('../img/gato.png')
            c[5]++
        }
    })

    jogar(imgs, c)
}

function pegarDados() {
    let id = localStorage.getItem('id')
    fetch(`http://localhost:8080/tutankhamun/perfil/${id}`, {
        method: "GET",
        mode: 'cors',
        cache: "default"
    })
        .then(res => {
            res.json()
                .then(data => {
                    dadosFetch = data
                })
        })
}

function atualizarDados() {
    fetch("/cacaniquelput", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({saldo, jogos, vitorias, derrotas, nivel, id})
    })
        .then(res => {
        })
}