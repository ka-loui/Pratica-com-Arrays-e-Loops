let disparosAcimaDe70 = disparos.filter(pontuacao => pontuacao > 70);

if (disparosAcimaDe70.length >= 3) {
    console.log(disparosAcimaDe70.length);
} else {
    console.log("ELIMINADO");
}