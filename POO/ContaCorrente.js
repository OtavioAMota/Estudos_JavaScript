import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDecontas = 0;
    agencia;
    _cliente;
    _saldo = 0;// O #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields

    set cliente(novoValor){//acessor
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    get cliente(){//acessor
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDecontas += 1;
    }

    sacar(valor){
        if(this._saldo < valor) return;
        this._saldo -= valor;
        return valor;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
        return valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}