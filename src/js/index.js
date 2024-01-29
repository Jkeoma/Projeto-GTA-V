const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(
  ".btn-plataforma .plataformas"
);

//pegar click
botao.addEventListener("click", () => {
  elementoPlataformas.classList.toggle("ativo");
});
