debugger
function jurosSimples(capital, taxa, tempo) {
    return capital * (1 + taxa * tempo);
}

function jurosCompsosto(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa), tempo);
}

console.log(jurosSimples(100, 0.05, 10));
console.log(jurosCompsosto(100, 0.05, 10));