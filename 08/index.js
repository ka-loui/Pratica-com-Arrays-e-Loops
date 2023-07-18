notas.sort(function (a, b) {
    return a - b
})
notas.pop()
notas.shift()
let somaNotas = notas.reduce(function (acumulador, nota) {
    return acumulador + nota;
}, 0)
let media = somaNotas / notas.length;

console.log(media)