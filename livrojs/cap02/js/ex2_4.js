// cria referência ao form e ao elemnto h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um gatilho de eventos, acionado quando o botão "submit" for clicado
frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.inQuilo.value);   // obtém conteúdo dos campos
  const consumo = Number(frm.inConsumo.value);
  
  const valor = (quilo / 1000) * consumo     // calcula valor a ser pago
  resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`  // exibe a resposta

  e.preventDefault()  // evita envio do form
});