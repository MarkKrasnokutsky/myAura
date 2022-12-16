jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 150;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
    });
    });

var m = document.querySelector("main"),
    h = document.querySelector("header"),
    hHeight;
 
function setTopPadding() {
  hHeight = h.offsetHeight;
  m.style.paddingTop = hHeight + "px";
}

function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    var y = window.pageYOffset;
    if (y > 100) {
      h.classList.add("scroll");
      h.style.backgroundColor = '#D7D7D7';
      h.style.transition = 'all 0.4s ease';
    } else {
      h.classList.remove("scroll");
      h.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }
}


window.onload = function() {
  setTopPadding();
  onScroll();
};
 
window.onresize = function() {
  setTopPadding();
};

AOS.init();

$(function() {
  $('.myAbstractions__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
});

const nav = document.querySelector('#navHeader');
const navBtn = document.querySelector('#header__navButton');
const navBtnImg = document.querySelector('#burgerImg');

navBtn.addEventListener('click', () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = "img/close.png";
  }
  else {
    navBtnImg.src = "img/burger-bar.png";
  }
});
