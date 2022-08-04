function planoDeTrabalho(plano, salario){
   
    switch (plano) {
        case 'A':
            salario += calcularSalario(salario, 0.1)
            break;

        case 'B':
            salario += calcularSalario(salario, 0.15)
            break;
        
        case 'C':
            salario += calcularSalario(salario, 0.2)
            break;

        default:
            return 'Este plano não exite'
    }

    function calcularSalario(salario, percentualAumento){
        let aumento = (salario * percentualAumento);
        return aumento;
    }

    return salario;
}

console.log(planoDeTrabalho('A', 1000.00))
console.log(planoDeTrabalho('B', 1000.00))
console.log(planoDeTrabalho('C', 1000.00))
console.log(planoDeTrabalho('G', 1000.00))