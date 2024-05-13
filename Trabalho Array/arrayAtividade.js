let produtosArray = [];
let fabricantesArray = [];
let estoqueArray = [];

function cadastrarProdutos() {
    for (let index = 0; index < 6; index++) {
        let produto = prompt("Quais produtos você quer cadastrar (informe pelo menos 6)");
        produtosArray.push(produto);
    }
}
cadastrarProdutos();

function cadastrarFabricantes() {
    for (let index1 = 0; index1 < produtosArray.length; index1++) {
        let fabricante = alert(`Os produtos cadastrados são ${produtosArray[index1]}`);
        fabricantesArray.push(fabricante);
       
    }
 
}
cadastrarFabricantes();

function verificarEstoque(estoqueArray) {
    let produtoPesquisado = prompt("Informe o nome do produto que deseja pesquisar:");
    let index = produtosArray.indexOf(produtoPesquisado);
    if (!produtosArray) {
        let quantidadeEmEstoque = estoqueArray[index];
        alert(`Produto "${produtoPesquisado}" disponível. Quantidade em estoque: ${quantidadeEmEstoque}`);
    } else {
        alert("Produto indisponível.");
    }
}

verificarEstoque(estoqueArray);

