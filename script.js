const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener("click", function() {
        skillCards.forEach(c => {
            if (c !== card) {
                c.classList.remove("skill-card-span");
                c.querySelector(".cardArrow").classList.remove("skill-card-image-rotated")
            }
        }); 
        
        this.classList.toggle("skill-card-span");
        this.querySelector(".cardArrow").classList.toggle("skill-card-image-rotated")
    });
});