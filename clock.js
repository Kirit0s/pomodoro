'use strict';

var clock = document.querySelector('.clock');
var session = document.querySelector('input.session');
var timer2;
var timer1 = 1*60;

session.addEventListener('change', function () {
  clock.innerHTML = ('0' + session.value).slice(-2) + ':00';
  timer2 = session.value * 60;
});

function changeClass() {
  clock.classList.toggle('started');
}

function timer() {
  var min, sec;
  var setTimer = setInterval(function () {
    if  (timer2 > 0) {
      if (clock.classList.contains('started')) {
        timer2--;
        min = '0' + Math.floor(timer2 / 60);
        sec = '0' + (timer2 % 60);
        clock.innerHTML = min.slice(-2) + ':' + sec.slice(-2);
      }
      else {
        clearInterval(setTimer);
      }
    }
    else if (timer1 > 0) {
      if (clock.classList.contains('started')) {
        timer1--;
        min = '0' + Math.floor(timer1 / 60);
        sec = '0' + (timer1 % 60);
        clock.innerHTML = min.slice(-2) + ':' + sec.slice(-2);
      }
      else {
        clearInterval(setTimer);
      }
    }
    else {
      timer2 = session.value * 60;
      var timer1 = 1*60;
    }
  }, 1000);
}

clock.addEventListener('click', function () {
  changeClass();
  timer();
});
