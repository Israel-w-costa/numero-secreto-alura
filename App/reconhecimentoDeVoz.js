const elementoChute =document.querySelector ("#chute")
const botaoInicioDeJogo = document.querySelector ("#btn-butao")
const verdadeiro = true
 
  botaoInicioDeJogo.addEventListener ('click', () => {
  iniciaReconhecimentoDeVoz()
  elementoChute.innerHTML = `
  <h4>FALE!! </h4>
  `
}
  
  )

  function iniciaReconhecimentoDeVoz () {
    reconhecimentoDeVoz ()

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR'
  recognition.start ()
  recognition.addEventListener ('result', onspeak)
  iniciaNovameneteRechonhecimentoDeVoz (recognition)

  }

  function reconhecimentoDeVoz (reconhecerVoz) { 
    return SpeechRecognition =
   window.SpeechRecognition || window.webkitSpeechRecognition;}

  function onspeak (e) {
    const chute = (e.results [0] [0].transcript)
    exibeChute (chute)
    validacaoDoChute(chute)
  }

 function exibeChute (chute) {
  elementoChute.innerHTML = `
    <div>você disse :</div>
    <span class="box">${chute}</span>`
}
function iniciaNovameneteRechonhecimentoDeVoz(recognition) {
return recognition.addEventListener ('end', () => recognition.start())
  
}

const botaoJogar = document.querySelector ("#btn-joga")

document.body.addEventListener ('click', (e) => {
    if (e.target.id == 'btn-joga') {
        window.location.reload() 
    }
} )