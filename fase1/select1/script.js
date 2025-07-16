function alerta() {
alert("Ops! Tente novamente!");
}

// funcao para personagem escolhido
window.onload = function(){
    const personagemEscolhido = sessionStorage.getItem("personagemEscolhido")
    if (personagemEscolhido){
        document.getElementById("personagemEscolhido").src = `personagem${personagemEscolhido}.png`
    }else{
        document.getElementById("personagemEscolhido").src = "personagem1.png"
    }
}