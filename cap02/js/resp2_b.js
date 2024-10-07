'use strict'
/* Exercício
b) Elaborar um programa para um lan house de um aeroporto - O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.
*/

const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

frm.addEventListener('submit', (naoReload)=>{
    //entradas
    const valor = Number(frm.inValorUso.value)
    const tempo = Number(frm.inTempo.value)
    //processamento
    const pagamento = Math.ceil(tempo/15) * valor
    //saída
    resposta.innerText = `Valor a pagar é R$ ${pagamento.toFixed(2)}`
    naoReload.preventDefault()
})
