let saldo = 0

document.getElementById('btnVoltar').addEventListener('click', function () {
    window.location.href = "/"
});

document.getElementById("btnJogar").addEventListener('click', () => {
    randomizar()
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
    let valor = document.getElementById('inputAposta').value
    if(valor <= 0){
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

    cont.forEach(simb => {
        if (simb >= 3) {
            c++
            switch (i) {
                case 0:
                    mult = 2 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    break
                case 1:
                    mult = 4 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    break
                case 2:
                    mult = 8 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    break
                case 3:
                    mult = 16 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    break
                case 4:
                    mult = 32 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    break
                case 5:
                    mult = 64 * (simb - 2)
                    result.innerText = `Parabéns você ganhou ${valor * mult} crocoins!`
                    saldo += valor * mult
                    break
            }
        } else if (i == 5 && c < 1) {
            result.innerText = `Que pena você não ganhou nada!`
            saldo -= valor
        }
        i++
    });
    console.log(saldo)
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

