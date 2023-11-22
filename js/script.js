// header burger menu

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-main');
let menu = document.querySelectorAll('.nav-main__list');
let menuLinks = document.querySelectorAll('.nav-main__link');
let closeBtn = document.querySelector('.close-btn');

function toggle() {
  document.body.classList.toggle('stop-scroll');
    nav.classList.toggle('burger--active');
    menu.forEach( (el) => {
      el.classList.toggle('nav-main__list--active');
    });
    closeBtn.classList.toggle('close-btn--active');
}
burger.addEventListener('click', toggle);
menu.forEach( (el) => {el.addEventListener('click', toggle)});
closeBtn.addEventListener('click', toggle);

// product view more btn

let step = 3; 
const showBtn = document.querySelector('.btn-more');
const productLenght = document.querySelectorAll('.product').length;

showBtn.addEventListener('click', () => {
step += 3;
const array = Array.from(document.querySelector('.products-list').children);
const visibleItems = array.slice(0, step);
visibleItems.forEach(el => el.classList.add('visible'));

if(visibleItems.length === productLenght) {
  showBtn.style.display = 'none';
}
})

// menu swiper

let menuSwiper = new Swiper('.swiper-menu', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    breakpoints: {

      320: {
        
      },

      567: {
       
      },

      1200: {
       
      },
    }
});

// feedback swiper

let slidesPerView = 2;
if (document.documentElement.clientWidth < 1200) {
slidesPerView = 1;
}
var $counter = document.querySelector(".counter");
let allCount = document.querySelector(".all-count");
let allSlides = document.querySelectorAll(".feedback");
let count;
for (count = 0; count < allSlides.length; count++) {
}
allCount.innerHTML = count;

let swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    on: {
      init: function(){
        $counter.innerHTML = this.realIndex + slidesPerView
      },
      slideChange: function(){
        $counter.innerHTML = this.realIndex + slidesPerView
      }
    },
    spaceBetween: 30,
    a11y: {
        containerMessage: 'Слайдер',
        firstSlideMessage: 'Первый слайд',
        navigationBulletMessage: 'Перейти к слайду {{index}}'
      },

      breakpoints: {

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },

        1201: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      }
  });

// Map

ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map("map", {
		center: [48.872185073737896,2.354223999999991],
		zoom: 14
	});

	var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'map-marker.svg',
		iconImageSize: [35, 35],
    	iconImageOffset: [-3, -42]
	});

	myMap.geoObjects.add(myPlacemark);
}




