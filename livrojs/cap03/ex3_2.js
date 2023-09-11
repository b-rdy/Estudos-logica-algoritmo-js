const prompt = require("prompt-sync")()             // adiciona o pacote ao programa
const veiculo = prompt("Veículo: ")                 // lê os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50                        // calcula o valor da entrada
const parcela = (preco * 0.50) / 12                 // calcula o valor das parcelas
//exibe as repostas
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)