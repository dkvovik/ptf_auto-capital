var deadline = 'June 12 2017';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.time_days');
  var hoursSpan = clock.querySelector('.time_hours');
  var minutesSpan = clock.querySelector('.time_min');
  var secondsSpan = clock.querySelector('.time_sec');
  function updateClock() {
    var t = getTimeRemaining(endtime);
    
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0) {
        clearInterval(timeinterval);
    }
  }
  updateClock(); // запустите функцию один раз, чтобы избежать задержки
  var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', deadline);