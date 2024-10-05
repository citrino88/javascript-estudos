'use strict'
/* a) Elaborar um programa para um cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos. */

// fazer as referências ao form
const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// criar o "ouvinte de evento" acionado quando submit é pressionado
form.addEventListener('submit', (naoReload)=>{
    //comandos

    // ENTRADA dos dados
    const titulo = form.inputTitulo.value
    const duracao = Number(form.inputDuracao.value)

    // PROCESSAMENTO
    const horas = Math.floor(duracao / 60) //arredondando o resultado para baixo, pego só a parte inteira
    const minutos = duracao % 60 // pega o resto da divisão

    // SAÍDA
    resp1.innerText = titulo
    resp2.innerText = `O filme tem ${horas} horas e ${minutos} minuto(s)`
    naoReload.preventDefault()
})
