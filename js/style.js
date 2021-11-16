const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
}

else {
   document.body.classList.add('_pc');
}

// меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (a) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}


function onMenuLinkClick(e) {
   // отключение прокрутки
   e.preventDefault();
}
// swiper
new Swiper('.swiper', {
   pagination: {
      el: '.swiper-pagination',
      draggable: true,
      clickable: true,
   },
   touchRatio: 1.5,
   mousewheel: {
      sensitivity: .2,
      eventsTarget: ".image-slider"
   },
   direction: 'horizontal',
   autoHeight: true,
   slidesPerView: 4.1,
   hashNavigation: {
      watchState: true,
   },
   watchOverflow: true,
   centeredSlides: false,
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
   spaceBetween: 25,
   speed: 700,
   breakpoints: {
      320: {
         slidesPerView: 1.6,
      },
      480: {
         slidesPerView: 2.3,
      },
      767: {
         slidesPerView: 3.1,
      },
      992: {
         slidesPerView: 4.2,
      },
   },
});