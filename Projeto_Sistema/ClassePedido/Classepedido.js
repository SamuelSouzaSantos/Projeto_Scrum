export class Pedido {
    #prazoEntrega
    constructor(numPedido, prazoEntrega, codigoCliente, codigoVendedor){
        this.numPedido = numPedido
        this.#prazoEntrega = prazoEntrega
        this.codigoCliente = codigoCliente
        this.codigoVendedor = codigoVendedor
        this.itens = []
    }
    get prazoEntrega(){
        return this.#prazoEntrega
    }

    set prazoEntrega(novoPrazo) {
        if (new Date(novoPrazo) < new Date()) {
            throw new Error("O prazo de entrega não pode ser uma data passada!");
        }
        this.#prazoEntrega = novoPrazo;
    }

    adicionarItem(codigoProduto, quantidade) {
        const item = new ItemDoPedido(this.numPedido, codigoProduto, quantidade);
        this.itens.push(item);
    }

    removerItem(codigoProduto) {
        this.itens = this.itens.filter(i => i.codigoProduto !== codigoProduto);
    }

    listarItens() {
        return this.itens;
    }
}

const pedido1 = new Pedido(101, "2025-09-15", "C001", "V005")

pedido1.adicionarItem("P001", 2)
pedido1.adicionarItem("P002", 5)

console.log("Itens do pedido:", pedido1.listarItens())