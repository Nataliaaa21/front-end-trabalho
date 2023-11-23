
//cabra
function tocaSomCabra(){
    document.querySelector("#som_tecla_cabra").play();
}
document.querySelector(".tecla_cabra").onclick = tocaSomCabra;
//cachorro
function tocaSomCachorro(){
    document.querySelector("#som_tecla_cachorro").play();
}
document.querySelector(".tecla_cachorro").onclick = tocaSomCachorro;

//foca
function tocaSomFoca(){
    document.querySelector("#som_tecla_foca").play();
}
document.querySelector(".tecla_foca").onclick = tocaSomFoca;

//fofo
function tocaSomFofo(){
    document.querySelector("#som_tecla_fofo").play();
}
document.querySelector(".tecla_fofo").onclick = tocaSomFofo;

//ricardo
function tocaSomRicardo(){
    document.querySelector("#som_tecla_ricardo").play();
}
document.querySelector(".tecla_ricardo").onclick = tocaSomRicardo;

//girafa
function tocaSomGirafa(){
    document.querySelector("#som_tecla_girafa").play();
}
document.querySelector(".tecla_girafa").onclick = tocaSomGirafa;

//porquinho
function tocaSomPorquinho(){
    document.querySelector("#som_tecla_porquinho").play();
}
document.querySelector(".tecla_porquinho").onclick = tocaSomPorquinho;

//raposa
function tocaSomRaposa(){
    document.querySelector("#som_tecla_raposa").play();
}
document.querySelector(".tecla_raposa").onclick = tocaSomRaposa;

//tartaruga
function tocaSomTartaruga(){
    document.querySelector("#som_tecla_tartaruga").play();
}
document.querySelector(".tecla_tartaruga").onclick = tocaSomTartaruga;
/*

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
let lista = document.querySelectorAll(".tecla");
let contador = 0;
while(contador< lista.length){
    const efeito = lista[contador].classList[1];
    const idAudio = "#som_"+efeito;
    lista(contador).onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}*/