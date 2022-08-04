const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1, peso2)
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const av1 = 9.921;
const av2 = 6.782;

const total = av1* peso1 + av2 * peso2;
const media = total / (peso1 + peso2);
console.log(media);
// coloca o numero de casas decimais após a virgula
console.log(media.toFixed(2));
console.log(typeof media);
console.log(typeof Number);

console.log('\n');
//converte o  valor para string
console.log(typeof(media.toString()));
//converter para valor binario
console.log(media.toString(2));

