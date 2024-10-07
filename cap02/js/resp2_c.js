//'use strict'

/* Exercício
c) Um supermercado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando  50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção
 */
// referências
const frm = document.querySelector('form')
const resp1 = document.querySelector('#resposta1')
const resp2 = document.querySelector('#resposta2')
//ouvinte, função e comandos
frm.addEventListener('submit', (naoReload) => {
    //entrada
    const produto = frm.inProduto.value
    const preco =  Number(frm.inPreco.value)
    //processamento
    const valor3 = preco / 2
    const total = (preco * 2) + valor3
    //saída
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${total.toFixed(2)}`
    resp2.innerText = `O 3º produto custará apenas R$ ${valor3.toFixed(2)}`
    naoReload.preventDefault()
})
