'use strict'
/* c) Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago. */

//criar as referencias a entradas do form e a saída
const frm = document.querySelector('form')
const resp = document.querySelector('h3') 

//criar o "ouvinte de evento"
frm.addEventListener('submit', (naoReload)=>{
    //ENTRADA
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    //PROCESSAMENTO
    const valor = (quilo/1000)*consumo

    //SAÍDA
    resp.innerText = `Valor a pagar R$ ${valor}`
    naoReload.preventDefault()
})