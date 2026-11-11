'USE STRICT';
const nomeProjeto = 'Tríade 3D';
const chaveiro = 31.90;
const corente = 4;
const quantidade = 2;
const taxaEntrega = 7;

const valorUnidade = chaveiro + corente;
const subtotal = valorUnidade * quantidade;
const total = subtotal + taxaEntrega;

console.log(`chaveiro: ${nomeProjeto}`);
console.log(`quantidade: ${quantidade}`);
console.log(`total previsto: ${total}`);
