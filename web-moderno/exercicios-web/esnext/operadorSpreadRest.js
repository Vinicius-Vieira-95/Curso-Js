// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
//espalha cada elemento do array do GrupoA dentro de um novo  array do GrupoFinal
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] 
console.log(grupoFinal)