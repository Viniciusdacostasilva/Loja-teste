const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

image1.addEventListener("mouseenter", () => {
    image1.style.display = "none";
    image2.style.display = "block";
});

image2.addEventListener("mouseleave", () => {
    image1.style.display = "block";
    image2.style.display = "none";
});



//Botão do Duvidas
  
const botoesMostrar = document.querySelectorAll('.faq-button');
const respostas = document.querySelectorAll('.faq-answer');

botoesMostrar.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        respostas[index].classList.toggle('visivel');
    });
});
