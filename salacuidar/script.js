function gerarTXT() {
  const respostas = [
    { pergunta: "Hoje você se sentiu feliz na escola?", resposta: localStorage.getItem("pergunta1") || "Sem resposta" },
    { pergunta: "Você se divertiu com seus amigos hoje?", resposta: localStorage.getItem("pergunta2") || "Sem resposta" },
    { pergunta: "Algo te deixou chateado hoje?", resposta: localStorage.getItem("pergunta3") || "Sem resposta" },

 
    // Adicione mais perguntas conforme necessário
  ];

  let conteudo = "Relatório de Respostas do Usuário:\n\n";
  respostas.forEach((item, index) => {
    conteudo += `${index + 1}. ${item.pergunta}\nResposta: ${item.resposta}\n\n`;
  });

  const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "respostas.txt";
  link.click();
}