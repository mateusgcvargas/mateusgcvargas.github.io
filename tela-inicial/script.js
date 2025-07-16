let PersonagemAtual = 1;
const qtdPersonagem = 3;

// funcao para trocar de personagem
function trocarpersonagem(mudancapersonagem){
    PersonagemAtual += mudancapersonagem
    if(PersonagemAtual > qtdPersonagem ){
        PersonagemAtual =1
    }else if(PersonagemAtual < 1){
        PersonagemAtual = qtdPersonagem

    }
    document.getElementById("personagem").src = `personagem${PersonagemAtual}.png`;
}
function iniciarjogo() {
  sessionStorage.setItem("personagemEscolhido", PersonagemAtual);
  window.location.href = "../fase1/intro1/index.html";
}