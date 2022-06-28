let numero = 0

function aumentar(){
    numero = numero + 1
    monstrarnatela()
}
function zerar(){
    numero = 0
    monstrarnatela()
}
function diminuir(){
    numero = numero -1
    monstrarnatela()
    console.log("diminuir")
}
function monstrarnatela(){
    const p = document.querySelector ("#resultado")
    p.innerText =numero
}
monstrarnatela()