const carousel = document.getElementById("carousel");
const pageIndicator = document.getElementById("page-indicator");
const cards = carousel.querySelectorAll(".card");
let index = 0;

function updatePage() {
  pageIndicator.textContent = 0${index + 1} / 0${cards.length};
  cards[index].scrollIntoView({ behavior: "smooth", inline: "start" });
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updatePage();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updatePage();
});

updatePage();
