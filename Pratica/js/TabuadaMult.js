let cartilhaTabuada = new Array()

function multiplicar1(num){
    let n = 1;
    let array = []
    // for (let index = 1; index <= 10; index++) {
    //     n = num * index
    //     console.log(`${num} x ${index} = `, n)
    // }
    for (let index = 0; index < 10; index++) {
        array[index] = n * num;
        n++
    }
    return array
}

console.log(multiplicar1(3))


function tabuadaX1(){
    let array = []
    let n = 1
    for (let index = 0; index < 10; index++) {
        array[index] = multiplicar1(n)
        n++
    }
    console.log(array)
}

function tabuadaX2(num){
    let array = []
    let n = 1
    for (let index = 0; index < num; index++) {
        array[index] = multiplicar1(n)
        n++
    }
    console.log(array)
}



// multiplicar1(2)
// console.log(" ")
// multiplicar1(3)


// tabuadaX1()
tabuadaX2(9)
