function solucao(precos) {
    //seu codigo aqui
let soma = 0
let menorPreco = precos [0]
for (let item of precos){
    soma += item
    if (item < menorPreco){
        menorPreco = item
    }
}
    if (precos.length >= 5){
        console.log (soma - menorPreco)
    } else {
        console.log(soma)
    }
}
