'use strict'
/* c) Em um determinado momento do dia, apenas notas de 10, 50, 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque. */

const form = document.querySelector('form')
const resp100 = document.querySelector('#nota100')
const resp50 = document.querySelector('#nota50')
const resp10 = document.querySelector('#nota10')

form.addEventListener('submit', (noReload)=>{
    noReload.preventDefault()
    const saque = Number(form.inSaque.value)
    if(saque % 10 != 0){
        //verifica se o valor digitado pelo usuário é válido
        alert('Valor inválido para as notas disponíveis\n(R$ 10, 50 ou 100)')
        form.inSaque.focus()
        return
    }
    const notas100 = Math.floor(saque / 100) //quantas notas de 100
    let resto = saque % 100 // o que sobra da divisão por 100
    const notas50 = Math.floor(resto/50) //quantas notas de 50
    resto = resto % 50
    const notas10 = Math.floor(resto/10)//quantas notas de 10
    if(notas100 > 0){
        resp100.innerText = `Notas de R$ 100 é igual a: ${notas100}`
    }
    if(notas50 > 0){
        resp50.innerText = `Notas de R$ 50 é igual a: ${notas50}`
    }
    if(notas10 > 0){
        resp10.innerText = `Notas de R$ 10 é igual a: ${notas10}`
    }
})