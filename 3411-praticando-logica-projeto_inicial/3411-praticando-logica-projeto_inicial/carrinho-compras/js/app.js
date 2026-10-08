let totalGeral ;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valores
    let Produto = document.getElementById('produto');
    let nomeProduto = Produto.value.split('-')[0]; //pegar o nome do produto
    let valorUnitario = Produto.value.split('R$')[1]
    let quantidade = document.getElementById('quantidade');
    
    alert(nomeProduto);
    alert(quantidade.value);
    alert(valorUnitario);
     //calcular o preço, o nosso subtot
    let preco = Number(quantidade.value) * Number(valorUnitario);
    alert(preco);
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //atualizar o valor total
    totalGeral = totalGeral +preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 0;

}

function limpar(){
 totalGeral = 0 ;
 document.getElementById('lista-produtos').innerHTML = '';
 document.getElementById('valor-total').textContent = `R$ 0`;

}