 function parallax() {
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
};


export default parallax