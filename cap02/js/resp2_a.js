'use strict'
/* Exercício

a) Uma farmácia está com uma promoção - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia a descrição e preço de um medicamento. Informe o valor do produto na promoção. */

// criar as referencias ao form e a saídas
const frm = document.querySelector('form')
const resposta1 =  document.querySelector('#outResp1')
const resposta2 = document.querySelector('#outResp2')

// criar o "ouvinte de evento"
frm.addEventListener("submit", (naoReload) => {
    //Entrada
    const medicamento = frm.inRemedio.value
    const preco = Number(frm.inPreco.value)

    //Processamento
    const valorPromocao = Math.floor(preco * 2)
    
    //Saída
    resposta1.innerText = `Promoção de ${medicamento}`
    resposta2.innerText = `Leve 2 por apenas R$ ${valorPromocao.toFixed(2)}`
    naoReload.preventDefault()
})