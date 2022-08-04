// Arrow function
const dinheiro = (valor) => {
    let notaDe100 = 0
    let notaDe50 = 0
    let notaDe20 = 0
    let notaDe10 = 0
    let notaDe5 = 0
    let notaDe1 = 0

    const array = []

    while(valor > 0){
        if(valor >= 100){
            valor -= 100
            notaDe100++;
        }
        else if( valor >= 50){
            valor -= 50
            notaDe50++
        }
        else if(valor >= 20){
            valor -= 20
            notaDe20++
        }
        else if(valor >= 10){
            valor -= 10
            notaDe10++
        }
        else if(valor >= 5){
            valor -= 5
            notaDe5++
        }
        else{
            valor -= 1
            notaDe1++
        }
    }

    array.push(notaDe1, notaDe5, notaDe10, notaDe20, notaDe50, notaDe100)
    return array
}

function valorEmString(array = dinheiro){
    for (let index = 0; index < array.length; index++) {
        if(array[index] != 0){
            switch (index) {
                case 0:
                    console.log(`Nota(s) de 1: ${array[0]}`)
                    break;
                case 1:
                    console.log(`Nota(s) de 5: ${array[1]}`)
                    break;
                case 2:
                    console.log(`Nota(s) de 10: ${array[2]}`)
                    break;
                case 3:
                    console.log(`Nota(s) de 20: ${array[3]}`)
                    break;
                case 4:
                    console.log(`Nota(s) de 50: ${array[4]}`)
                    break;
                case 5:
                    console.log(`Nota(s) de 100: ${array[5]}`)
                    break;
                default:
                    console.log("Sem notas no caixa")
                    break;
            }
        }
    }
}

console.log(dinheiro(258))
valorEmString(dinheiro(1333))

