/* Exemplo com Node.js

a) A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam 12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar.*/

const prompt = require("prompt-sync")()
//nº de pessoas por família
//nº de peixes obtidos
//informar valor a pagar
const pessoas = Number(prompt('Nº de pessoas: '))
const peixes = Number(prompt('Nº de peixes pescados: '))

let pagar = peixes <= pessoas ? pessoas * 20 : (pessoas * 20 + (peixes - pessoas) * 12)

console.log(`Pagar R$ ${pagar.toFixed(2)}`)

