const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener("click", function() {
        skillCards.forEach(c => {
            if (c !== card) c.classList.remove("skill-card-span");
        }); 
        
        this.classList.toggle("skill-card-span");
        this.querySelector(".cardArrow").classList.toggle("skill-card-image-rotated")
    });
});

const techIcons = document.getElementsByClassName("tech-icon");

techIcons.forEach(icon => {
    icon.addEventListener("click", function() {
        this.classList.toggle("rotate-icon");
    })
})









