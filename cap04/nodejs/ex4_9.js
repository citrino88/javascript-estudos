/* Exemplo com Node.js

c) Elaborar um programa que leia um número - que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem de erro. */

const prompt = require("prompt-sync")()
const num = Number(prompt('Número maior que cem: '))

if( num < 100 || num >= 1000 ){
    console.log(`Ops Erro!! O número deve ser uma centena!!`)
    return    
}

const centena = Math.floor(num / 100) // pega o 1º número
const resto = num % 100
const dezena = Math.floor(resto / 10) // pega o 2º número
const unidade = resto % 10 // pega o 3º número
console.log(`Seu número foi ${num}\nEle Invertido fica: ${unidade}${dezena}${centena}`);

