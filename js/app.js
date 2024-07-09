let totalGeral = 0;
limpar();

function adicionar() {
    //Recuperar valores nome do produto, quantidade e valor
    let Produto = document.getElementById('produto').value;
    let nomeProduto = Produto.split('-')[0];
    let valorUnitario = Produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //Calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    if (quantidade <= 0 || quantidade == " ") {
        alert("Adicione uma quantidade de itens no campo Qtde.");
        limparQtde();
    } else {
        //Adicionar no carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

        //atualizar o valor total
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = " ";
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ' ';
    document.getElementById('valor-total').textContent = 'R$ 0,00 ';

}

function limparQtde() {
    quantidade = document.getElementById('quantidade').value = " ";
}