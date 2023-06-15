// acessando div do chute
const elementoChute = document.getElementById('chute')

// acessamos a API do reconhecimento de fala
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

// precisamos atribuir essa api a uma variavel, para acessar a configuração de idioma e de start logo abaixo
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

// evento que reconhece a fala
recognition.addEventListener('result', onSpeak)

// função que tem inicio ao receber o evento de fala
function onSpeak(e) {
    // acessamos o dom, e vamos até a camada que guarda oque foi dito pro usuario
    chute = e.results[0][0].transcript
    // apos o evento de fala chamamos a função abaixo que controi o texto e exibe o resultado na tela do usuario
    exibeChuteNaTela(chute)
    // passa o valor de chuta para a funcao e ela faz todo o processo de validacao contido na outra pagina do js
    verificaSeOChutePossuiUmValorValido(chute)
}

// constroi o texto e exibe o resultado na tela do usuario
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

// reinicia o processo de verificação do valor
recognition.addEventListener('end', () => recognition.start())
