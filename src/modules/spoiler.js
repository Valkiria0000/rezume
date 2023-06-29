function spoiler() {
  const topic = document.querySelector(".topic");
  const arrows = document.querySelectorAll(".arrow");

  arrows.forEach(function (arrow) {
    arrow.addEventListener("click", showTextsArrow);
  });

  function showTextsArrow(e) {
    if (this.closest(".arrow")) {
      this.classList.toggle("rotate");
      this.parentElement.nextElementSibling.classList.toggle("show-block");
    }
  }

  topic.addEventListener("click", showTextsSpoiler);

  function showTextsSpoiler(e) {
    if (e.target.closest(".topic__title")) {
      e.target.nextElementSibling.classList.toggle("show-block");
      e.target.children[0].classList.toggle("rotate");
    } else {
      let item = e.target.children;
      for (let node of item) {
        node.children[1].classList.remove("show-block");
        let arrow = node.children[0].children[0];
        if (arrow.classList.contains("rotate")) {
          arrow.classList.remove("rotate");
        }
      }
    }
  }
}

export default spoiler;
