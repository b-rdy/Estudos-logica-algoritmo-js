// cria referência ao form e aos elemtnso de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um gatilho de eventos quando o botão "submit" for clicado
frm.addEventListener("submit", (e) => {
  // obtém o conteúdo dos campos
  const medicamento = frm.inMedicamento.value;    
  const preco = Number(frm.inPreco.value);

  const desconto = Math.floor(preco * 2)        // calcula a promoção (arredonta pra baixo)

  // exibe as repostas
  resp1.innerText = `Promoção de ${medicamento}`; // exibe as repostas
  resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`
  e.preventDefault(); 
})

