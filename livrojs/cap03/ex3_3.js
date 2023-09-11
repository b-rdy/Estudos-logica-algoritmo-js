const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))

const quadrienio = Math.floor(tempo / 4)
const porcentagem = (salario / 100) 
const reajuste = (porcentagem * quadrienio) + salario

console.log(`Quadriênios: ${quadrienio}`)
console.log(`Salário Final R$: ${reajuste}`)