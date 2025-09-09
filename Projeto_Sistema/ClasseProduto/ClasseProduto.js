class Produto{
constructor(codigoProduto, descricaoProduto, valorProduto, dataCadastro, statusProduto){
    this.codigoProduto = codigoProduto;
    this.descricaoProduto = descricaoProduto;
    this.valorProduto = valorProduto;
    this.dataCadastro = dataCadastro;
    this.statusProduto = statusProduto;
}
CalcularMedia(vendas){
    if(vendas.length > 0){
        const total = vendas.reduce((acc, venda) => acc + venda.valor, 0);
        return total / vendas.length;
    }
    return 0;
}