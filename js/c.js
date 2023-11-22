// feedback swiper

var slidesPerView = 2
var $counter = document.querySelector(".counter")


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
        //this.realIndex / slidesPerView + 2
      },
      slideChange: function(){
        $counter.innerHTML = this.realIndex + 2
        console.log();
      }
    },
    spaceBetween: 30,
    slidesPerGroup: 2,
    a11y: {
        containerMessage: 'Слайдер',
        firstSlideMessage: 'Первый слайд',
        navigationBulletMessage: 'Перейти к слайду {{index}}'
      },

      breakpoints: {

        320: {
          slidesPerView: 2,
          spaceBetween: 12,
        },

        567: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        1200: {
          slidesPerView: 2,
        },
      }
  });

let allCount = document.querySelector(".all-count");
let allSlides = document.querySelectorAll(".swiper-slide");
let count;
for (count = 0; count < allSlides.length; count++) {
}
allCount.innerHTML = count;

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
    spaceBetween: 30,
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

  burger.addEventListener('click', () => {
    document.body.classList.toggle('stop-scroll');
    nav.classList.toggle('burger--active');
    menu.forEach( (el) => {
      el.classList.toggle('nav-main__list--active');
    });
    closeBtn.classList.toggle('close-btn--active');
  });
  
  function close() {
    document.body.classList.remove('stop-scroll');
      nav.classList.remove('burger--active');
      menu.forEach( (el) => {
        el.classList.remove('nav-main__list--active');
      });
      closeBtn.classList.remove('close-btn--active');
  }

  CloseBtn.addEventListener('click', () => {
    document.body.classList.toggle('stop-scroll');
    nav.classList.toggle('burger--active');
    menu.forEach( (el) => {
      el.classList.toggle('nav-main__list--active');
    });
    closeBtn.classList.toggle('close-btn--active');
  });

  menu.addEventListener('click', () => {
    document.body.classList.toggle('stop-scroll');
    nav.classList.toggle('burger--active');
    menu.forEach( (el) => {
      el.classList.toggle('nav-main__list--active');
    });
    closeBtn.classList.toggle('close-btn--active');
  });
  