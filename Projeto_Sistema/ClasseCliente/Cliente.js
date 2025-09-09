export class Cliente{
    constructor(codigo, nome, endereco, cidade, cep, uf, cgc, ie){
        this.codigoCliente = codigo
        this.nomeCliente = nome
        this.endereco = endereco
        this.cidade = cidade
        this.cep = cep
        this.uf = uf
        this.cgc = cgc
        this.ie = ie
    }

    fazerPedido(novoPedido){
        console.log(`Pedido de um ${novoPedido} criado.`)
        
    }
}