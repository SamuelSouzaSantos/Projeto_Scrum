export class Vendedor {
    constructor(codigo, nome, salario, comissao){
        this.codigo = codigo;
        this.nome = nome;
        this.salario = salario;
        this.comissao = comissao;
    }
    calcularSalario(vendas) {
        this.salario + (vendas * this.comissao);
    }
}
