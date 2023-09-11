// cria referência ao form e ao elemnto h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um gatilho de eventos, acionado quando o botão "submit" for clicado
frm.addEventListener("submit", (e) => {
    // obtém conteúdo dos campos
  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTempo.value);

  //calcula o valor a ser pago
  const pagar = Math.ceil(tempo / 15) * valor

  // exibe o valor a pagar (com 2 decimais)
  resp.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`

  e.preventDefault()                // evita envio do form
})