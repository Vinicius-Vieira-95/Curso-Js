const convenio = (idade)=> {
    let valor = 100;
        if(idade < 10)
            valor += 80;
        else if(idade < 30)
            valor += 50;
        else if(idade < 60)
            valor += 90;
        else if(idade > 60)
            valor += 130;

    return valor;
}

console.log(convenio(9))
console.log(convenio(29))
console.log(convenio(50))
console.log(convenio(70))
console.log(convenio(10))