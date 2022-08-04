// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function divisivelPor3(valor){
    if(valor%3 == 0){
        return true
    }
    return false
}

console.log(divisivelPor3(3))
console.log(divisivelPor3(30))
console.log(divisivelPor3(13))
