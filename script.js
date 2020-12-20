window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++ ) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');

    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');

    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for(var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //Timer
  var deadLine = '2020-12-30';
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours  = Math.floor((t/(1000*60*60)));
        //day = Math.floor((t/(1000*60*60*24)));
        return {
              'total': t,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
        };
  }
  function setClock(id, endtime) {
      var timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
        var t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;
        if (t.total <= 0){
          clearInterval(timeInterval);
        }
      }
  }
  setClock('timer', deadLine);

  // Modal

  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

      more.addEventListener('click', function() {
         overlay.style.display = 'block';
         this.classList.add('more-splash');
         document.body.style.overflow = 'hidden';
      });
      close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

      });
        //Slider

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');

      showSlides(slideIndex);

      function showSlides(n) {
        if (n > slides.length){
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i=0; i < slides.length; i++) {
        //   slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
      }

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      prev.addEventListener('click', function() {
        plusSlides(-1);
      });

      next.addEventListener('click', function() {
        plusSlides(1);
      });

      //дeлегирование
      dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
          if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
          }
        }
      })
});