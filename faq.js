const arrows = document.querySelectorAll(".button-down");
const faq = document.querySelectorAll(".faq_answer");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function () {
    faq[i].classList.toggle("active");

    for (let j = 0; j < arrows.length; j++) {
      if (j !== i) {
        faq[j].classList.remove("active");
      }
    }
  });
}