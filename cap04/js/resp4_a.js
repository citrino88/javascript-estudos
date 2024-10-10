'use strict'
/* 
a) Elaborar um programa que leia um número. Informe se ele é par ou ímpar. Faça com o if...else...tradicional e, após, tente criar a condição com o operador ternário. */
const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', (noReload)=>{
    noReload.preventDefault()

    const numero = Number(form.inNumero.value)
    
    if(numero % 2 == 0){
        resp.innerText = `${numero} é par`
    } else {
        resp.innerText = `${numero} é ímpar`
    }
})