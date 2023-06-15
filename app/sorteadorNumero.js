// Valores do game
const menorValor = 1
const maiorValor = 1000

// const que carrega a função gerar numero
const numeroSecreto = gerarNumeroAleatorio()

// função que gera o numero aleatorio entre 0 e 1000
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(`Número Secreto: ${numeroSecreto}`)

// acessando valores de menor valor e atribuindo seu valor de acordo com a variavel de menor valor
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

// acessando valores de maior valor e atribuindo seu valor de acordo com a variavel de maior valor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor