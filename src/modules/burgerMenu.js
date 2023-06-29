function burger() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", function () {
    if (this.closest(".burger")) {
      nav.style = `
    display: block;
    `;
      nav.classList.toggle("nav-active");
      document.body.classList.toggle("lock");
      burger.children[0].classList.toggle("burger-active");
    }
  });
}
export default burger;
