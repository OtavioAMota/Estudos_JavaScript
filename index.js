import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Otavio", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);
conta1.depositar(500);

let valor = 200;
conta1.transferir(valor, conta2);

console.log(conta1);
console.log(ContaCorrente.numeroDecontas)