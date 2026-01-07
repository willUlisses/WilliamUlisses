const skillCards = document.getElementsByClassName('skill-card');

for (const card of skillCards) {
    card.addEventListener("click", cardExpand);
}

function cardExpand() {
    this.classList.toggle("skill-card-span");
    this.querySelector(".cardArrow").classList.toggle("skill-card-image-rotated");
}

function rotateArrow() {
    this.querySelector(".cardArrow").style.transform = "rotate(180deg)";
}











