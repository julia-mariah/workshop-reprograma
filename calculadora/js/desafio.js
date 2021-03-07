console.log('tamo on')

var entrada = document.querySelector('#valor-hora')

var inputhorasprojeto = document.querySelector('#horas-projeto')

var resultado = document.querySelector('#resposta')

function calcular(){

var valorhora = entrada.valueAsNumber

var horasProjeto = inputhorasprojeto.valueAsNumber

var total = valorhora * horasProjeto


resultado.textContent = 'R$'+ total

}