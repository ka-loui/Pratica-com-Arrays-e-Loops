function solucao(precos) {
  // seu codigo aqui
    let menosPreju = 999999999999
    for (let i = 0; i < precos.length; i++){
    for(let j = i + 1; j < precos.length; j++){
        const compra = precos [i]
        const venda = precos [j]
        const prejuizo = compra - venda
        if (prejuizo > 0 ){
            if (prejuizo < menosPreju){
                menosPreju = prejuizo
            }
            }
        }
    }
    console.log(menosPreju)
}
