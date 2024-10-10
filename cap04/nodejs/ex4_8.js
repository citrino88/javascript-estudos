/* Exemplo com Node.js

b) Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: a)cada parcela deve ser de no mínimo, R$ 20,00; b)o número máximo de parcelas permitido é 6. */

//ler total de compra
//exibir num máx de vezes para parcelar
//valor de cada parcela
// a , b

const prompt = require("prompt-sync")() //add pct npm
const total =  Number(prompt('Valor total da compra R$: '))
const condicao20 = Math.floor(total/20)
const parcelas = condicao20 == 0 ? 1 : condicao20 > 6 ? 6 : condicao20
const valorParcela = total / parcelas
console.log(`Pode pagar em ${parcelas}x de R$${valorParcela.toFixed(2)}`);


