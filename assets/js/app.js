$('.customer-list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img srcset="./assets/img/Vector-prev.png 2x"></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img srcset="./assets/img/Vector-next.png 2x"></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";

toggle.addEventListener("click", function() {
  menu.classList.add(activeClass);
});

window.addEventListener('click', function(e){   
  if ((menu.contains(e.target) && !e.target.matches(".menu-toggle")) || (!menu.contains(e.target) && !e.target.matches(".menu-toggle"))){
    menu.classList.remove(activeClass);
  }
});
