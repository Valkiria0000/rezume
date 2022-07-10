/*window.onload = function () {
  const parallax = document.querySelector(".parallax");

  if (parallax) {
    const content = document.querySelector(".parallax__container");
    const sky = document.querySelector(".images-parallax__sky");
    const mountains = document.querySelector(".images-parallax__mountains");
    const forest = document.querySelector(".images-parallax__forest");
    const clouds = document.querySelector(".images-parallax__clouds");

    //коэффициент

    const forSky = 50;
    const forMountains = 30;
    const forForest = 10;
    const forClouds = 20;

    //скорость анимации
    const speed = 0.05;

    //объявление переменных

    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      // передаем стили

      sky.style.cssText = `transform: translate(${positionX / forSky}%,${
        positionY / forSky
      }%); `;
      mountains.style.cssText = `transform: translate(${
        positionX / forMountains
      }%,${positionY / forMountains}%); `;
      forest.style.cssText = `transform: translate(${positionX / forForest}%,${
        positionY / forForest
      }%); `;
      clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${
        positionY / forClouds
      }%); `;

      requestAnimationFrame(setMouseParallaxStyle);
    }

    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      //получение ширины и высоты блока
      const parallaxWith = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // ноль посередине

      const coordX = e.pageX - parallaxWith / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // получаем проценты

      coordXprocent = (coordX / parallaxWith) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });

    //parallax при скролле

    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }

    const callback = function (entries, observer) {
      const scrollTopProcent =
        (window.pageYOffset / parallax.offsetHeight) * 100;
      setParallaxItemStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector(".content"));

    function setParallaxItemStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 9
      }%)`;

      mountains.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 6
      }%)`;

      forest.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 3
      }%)`;

      clouds.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 2
      }%)`;
    }
  }
};*/
//******************************************************/
/*let images = [
  {
    url: "..//img/my_foto1.jpg",
    title: "Мое фото 1",
  },
  {
    url: "..//img/my_foto2.JPG",
    title: "Мое фото 2",
  },
  {
    url: "..//img/my_foto3.jpg",
    title: "Мое фото 3",
  },
];

function initSlider(options) {
  if (!images || !images.length) return;
  options = options || {
    titles: true,
    dots: true,
    autoplay: true,
  };

  let slideImages = document.querySelector(".slide__image");
  let slideBtns = document.querySelector(".slide__btns");
  let slideDots = document.querySelector(".slide__dots");

  initImages();
  initBtns();

  if (options.dots) {
    initDots();
  }

  if (options.titles) {
    initTitles();
  }

  if (options.autoplay) {
    initAutoplay();
  }

  function initImages() {
    images.forEach((image, index) => {
      let imgDiv = `<div class = "img n${index} ${index === 0 ? "active" : ""}" 
         style="background-image: url(${
           images[index].url
         });" data-index="${index}"></div>`;

      slideImages.innerHTML += imgDiv;
    });
  }

  function initBtns() {
    slideBtns.querySelectorAll(".slide__btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        let curNumber = +slideImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (btn.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }

        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dots = `<div class = "slide-dots-item n${index} ${
        index === 0 ? "activ-dot" : ""
      }" data-index='${index}'></div>`;
      slideDots.innerHTML += dots;
    });
    slideDots.querySelectorAll(".slide-dots-item").forEach((dots) => {
      dots.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    slideImages.querySelector(".active").classList.remove("active");
    slideImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      slideDots.querySelector(".activ-dot").classList.remove("activ-dot");
      slideDots.querySelector(".n" + num).classList.add("activ-dot");
    }
    if (options.titles) changeTitle(num);
  }

  function initTitles() {
    let titleDiv = `<div class="slide-img-title">${images[0].title}</div>`;
    slideImages.innerHTML += cropTitle(titleDiv, 50);
  }

  function changeTitle(num) {
    if (!images[num].title) return;
    let slideTitle = slideImages.querySelector(".slide-img-title");
    slideTitle.innerText = cropTitle(images[num].title, 50);
  }

  function cropTitle(title, size) {
    if (title.length <= size) {
      return title;
    } else {
      return title.substr(0, size) + "...";
    }
  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +slideImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoInterval);
  }
}

let slideOption = {
  titles: true,
  dots: true,
  autoplay: true,
  autoInterval: 5000,
};

document.addEventListener("DOMContentLoaded", function () {
  initSlider(slideOption);
});*/
//******************************************************/
/*function spoiler() {
  const topic = document.querySelector(".topic");
  const arrows = document.querySelectorAll(".arrow");

  arrows.forEach(function (arrow) {
    arrow.addEventListener("click", showTextsArrow);
    console.dir(arrow);
  });
  function showTextsArrow(e) {
    if (e.target.closest(".arrow")) {
      let item = e.target;

      item.classList.toggle("rotate");
      item.parentElement.nextElementSibling.classList.toggle("show-block");
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

document.addEventListener("DOMContentLoaded", function () {
  spoiler();
});
*/
//******************************************************/

const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", showMenu);
function showMenu() {
  if (this.closest(".burger")) {
    nav.style = `
    display: block;
    `;
    nav.classList.toggle("nav-active");
    // document.body.classList.toggle("lock"); //баг*******************

    console.dir(burger);
    burger.children[0].classList.toggle("burger-active");
  }
}
//************************************************** */
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
document.addEventListener("DOMContentLoaded", function () {
  scrollLink();
});
//********************************* */
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
  return;
}
document.addEventListener("DOMContentLoaded", function () {
  cardAnimat();
});
