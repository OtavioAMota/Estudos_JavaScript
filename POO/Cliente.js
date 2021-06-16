export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){//metodo construtor
        this.nome = nome;
        this._cpf = cpf;
    }

}