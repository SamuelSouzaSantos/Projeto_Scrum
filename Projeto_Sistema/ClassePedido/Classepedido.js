class Pedido {
    #prazoEntrega
    constructor(numPedido, prazoEntrega, codigoCliente, codigoVendedor){
        this.numPedido = numPedido
        this.prazoEntrega = prazoEntrega
        this.codigoCliente = codigoCliente
        this.codigoVendedor = codigoVendedor
    }

    get prazoEntrega() {
        return this.#prazoEntrega
    } 
}