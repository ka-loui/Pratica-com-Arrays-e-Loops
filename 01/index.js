function solucao(stringCorrompida) {
	// seu codigo aqui
    let purificado = ""
    for (let caractere of stringCorrompida) {
        if ( caractere === "!" || caractere === "@" || caractere === "#" || caractere === "$" || caractere === "%" || caractere === "&" || caractere === "*" || caractere === "(" || caractere === ")" ) {
            
        } else {
            purificado = purificado + caractere
        }
    }
      console.log(purificado)  
}
