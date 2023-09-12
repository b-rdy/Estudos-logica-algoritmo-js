// obtém elementos do form
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{                  // evita envio do form
  e.preventDefault()
  const numero = Number(frm.inNumero.value)             // obtém o número digitado no form
  const raiz = Math.sqrt(numero)                        // calcula a raiz quadrada desse número
  if (Number.isInteger(raiz)) {                         // se valor da raiz for um número inteiro/"isInteger": verifica se o número é INTEIRO
    resp.innerText = `Raiz: ${raiz}`                    // mostrar raiz
  } else {                                              // senão,
    resp.innerText = `Não há raiz exata para ${numero}` //... mostrar mensagem
  }
})