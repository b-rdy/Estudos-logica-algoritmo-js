const prompt = require("prompt-sync")()
const racao = Number(prompt("Peso da ração (kg): ")) * 1000
const consumo = Number(prompt("Consumo diário (gr): "))


const duracao = Math.floor(racao / consumo)
const sobra = racao - (consumo * duracao)

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)
