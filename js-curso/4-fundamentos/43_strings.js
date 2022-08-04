const escola = "Cod3r"

console.log(escola.charAt(4));
console.log(escola.charCodeAt(3)); // codigo unicode do valor
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("escola ".concat(escola).concat("!"));
console.log("Escola", escola,"!");
console.log("Escola " + escola + "!");

console.log(escola.replace(3, "e"));

console.log("Ana,Maria,Pedro".split(","));


console.log(escola.toUpperCase());
console.log(escola.toLocaleLowerCase());
