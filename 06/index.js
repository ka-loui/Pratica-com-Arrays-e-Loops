let palavrasEncontradas = palavras.filter(palavra => {
    return palavra.startsWith(primeiraLetra) && palavra.charAt(1) === segundaLetra;
})

if (palavrasEncontradas.length === 0) {
    console.log("NENHUMA")
} else {
    palavrasEncontradas.forEach(palavra => {
        console.log(palavra)
    })
}

