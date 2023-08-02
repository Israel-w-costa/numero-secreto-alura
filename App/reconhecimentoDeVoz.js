const elementoChute =document.querySelector ("#chute")
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR'
  recognition.start ()

  recognition.addEventListener ('result', onspeak)

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

recognition.addEventListener ('end', () => recognition.start())


const botaoJogar = document.querySelector ("#btn-joga")

document.body.addEventListener ('click', (e) => {
    if (e.target.id == 'btn-joga') {
        window.location.reload()
    }
} )