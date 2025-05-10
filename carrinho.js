let carrinho = [];

function adicionarAoCarrinho(botao) {
  const produto = botao.closest('.produto');
  const nome = produto.dataset.nome;
  const preco = parseFloat(produto.dataset.preco);

  if (!nome || isNaN(preco)) return;

  carrinho.push({ nome, preco });
  atualizarCarrinho();
  abrirCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const totalSpan = document.getElementById('total');
  lista.innerHTML = '';

  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}`;
    lista.appendChild(li);
    total += item.preco;
  });

  totalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function abrirCarrinho() {
  document.getElementById('carrinho').style.display = 'block';
}

function fecharCarrinho() {
  document.getElementById('carrinho').style.display = 'none';
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  let mensagem = 'Olá! Gostaria de fazer o pedido:\n\n';
  carrinho.forEach(item => {
    mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2).replace('.', ',')})\n`;
  });

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  mensagem += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;

  const whatsappLink = `https://wa.me/556284042435?text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappLink, '_blank');
}

function toggleQuemSomos() {
  const div = document.getElementById('quem-somos');
  div.classList.toggle('escondido');
}
