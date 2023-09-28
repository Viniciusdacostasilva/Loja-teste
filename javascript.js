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


/*Efeito de zoom ao passar o mouse na iamgem*/
const defaultImage = document.querySelector(".default-image");

defaultImage.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = defaultImage.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    defaultImage.style.transform = `scale(1.2) translate(${deltaX * 10}px, ${deltaY * 10}px)`;
});

defaultImage.addEventListener("mouseleave", () => {
    defaultImage.classList.remove("zoomed-in");
});

