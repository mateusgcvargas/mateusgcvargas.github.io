document.getElementById("inputbox").addEventListener("input", function () {
  localStorage.setItem("pergunta1", this.value);
});