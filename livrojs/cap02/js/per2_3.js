// cria referência ao form e aos elemtnso de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
// cria um gatilho de eventos quando o botão "submit" for clicado
frm.addEventListener("submit", (e) => {
  // obtém o conteúdo dos campos
  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  const valor = preco / 2
  const desconto = (preco / 2) * 5

  // exibe as repostas
 resp1.innerText = `${produto}- Promoção: Leve 3 por R$:${desconto.toFixed(2)}`; // exibe as repostas
 resp2.innerText = `O 3 produro custa apenas R$: ${valor.toFixed(2)}`
e.preventDefault(); 
})