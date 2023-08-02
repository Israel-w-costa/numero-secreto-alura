function validacaoDoChute (chute) {
    const numero = +chute
 

    if (verificarSeNumeroEstaEntreMaiorOuMenor (numero) ) {
        elementoChute.innerHTML += `<div> Valor invalido fale um número entre ${numeroMenor} a ${numeroMaior} </div>` 
        return
    }
    if (verificarSeEUmnumero (numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="btn-joga" class="butao-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += `<div> Valor invalido fale um número entre ${numeroMenor} a ${numeroMaior} </div>` 
        }
        return

    }

    if (numero == numeroSecreto) {
        document.body.innerHTML = `
        <h2> Parabéns você acertou</h2>
        <h3>O numero era ${numeroSecreto}</h3>
        <button id="btn-joga" class = "butao-jogar"> Jogar Novamente </button>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>o número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else { 
        elementoChute.innerHTML += `<div>o número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}


function verificarSeEUmnumero(numero) {
        return Number.isNaN (numero)
}

function verificarSeNumeroEstaEntreMaiorOuMenor(numero) {
    return numero < numeroMenor || numero > numeroMaior
}