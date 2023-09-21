
 // Adiciona um evento de clique a todos os botões "Mais Detalhes"
 const buttons = document.querySelectorAll('.card-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        openModal(button.nextElementSibling); // Abre o modal que segue o botão
    });
    
});
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
