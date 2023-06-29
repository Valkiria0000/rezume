function cardAnimat() {
  const cards = document.querySelector(".cards-animation");
  let card = cards.querySelectorAll(".cards-animation__card");

  cards.addEventListener("click", function () {
    cards.style = `
     transform: rotate(0deg);
       `;
    card.forEach(function (cardItem) {
      cardItem.style = `
       box-shadow: none;
       transform: translate(0px);
       
       `;

      cardItem.children[0].style = `
       display: none;
       `;
      let text = cardItem.querySelectorAll(".cards-animation__text");

      text[0].style = `
       display: block;
      `;
    });
  });
}

export default cardAnimat;
