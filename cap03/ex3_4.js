/* b) Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em  gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas). */

const prompt = require("prompt-sync")()
const peso = Number(prompt("Peso (kg): "))
const consumo = Number(prompt("Consumo diário (g): "))
const duracao = Math.floor((peso * 1000) / consumo) //pego só a parte inteira de dias
const sobra = (peso * 1000) % consumo // aqui pega o resto da divisão
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gramas`);

