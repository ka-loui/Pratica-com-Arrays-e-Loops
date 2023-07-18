function solucao(letra, palavras) {
	//seu codigo aqui
   let erros = 0
   for (let item of palavras){
       const inicial = item [0]
       if (inicial !== letra){
           erros++
       }
   }
    console.log(erros)
}
