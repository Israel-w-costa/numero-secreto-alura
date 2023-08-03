const numeroMenor = 1
const numeroMaior = 1000
const numeroSecreto = geradoNumero ()


function geradoNumero () {
    return parseInt (Math.random () * numeroMaior +1)
}

const elementoMenor = document.querySelector ("#numero-menor")
elementoMenor.innerText = numeroMenor
const elementoMaior = document.querySelector ("#numero-maior")
elementoMaior.innerText = numeroMaior
