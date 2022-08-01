function scrollLink() {
  const navlinks = document.querySelectorAll(".nav__link[data-goto]");

  if (navlinks.length > 0) {
    navlinks.forEach((navLink) => {
      navLink.addEventListener("click", onNavClick);
    });

    function onNavClick(e) {
      const navLink = e.target;

      if (
        navLink.dataset.goto &&
        document.querySelector(navLink.dataset.goto)
      ) {
        const goToPage = document.querySelector(navLink.dataset.goto);
        const goToPageValue = goToPage.getBoundingClientRect().top + scrollY;

        window.scrollTo({
          top: goToPageValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
}

export default scrollLink;
