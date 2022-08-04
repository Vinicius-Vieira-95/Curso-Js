function BhasKara(a, b, c){
    let delta = (b*b) - (4*a*c);
    console.log(delta);
    if(delta < 0){
        console.log("Não existem raízes reais");
    }
    else if(delta > 0){
        let x1 = (-b+Math.sqrt(delta))/(2*a);
        let x2 = (-b-Math.sqrt(delta))/(2*a);
        console.log("x1 = " + x1);
        console.log("x2 = " + x2);
    }
}

BhasKara(5, -5, -12);
BhasKara(3, 2, -12);
BhasKara(3, 7, 12);
BhasKara(1, 2, -1);
BhasKara(1, -3, -10);