let timer; // Variable to hold setInterval() function

let seconds = 0, minutes = 0, hours = 0;
let display = document.getElementById('display');

function displayTime() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  
    let displayHours = hours;
    let displayMinutes = minutes;
    let displaySeconds = seconds;
  
    if (hours < 10) {
      displayHours = "0" + hours;
    }
    if (minutes < 10) {
      displayMinutes = "0" + minutes;
    }
    if (seconds < 10) {
      displaySeconds = "0" + seconds;
    }
  
    display.textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
  }
  

  function startStop() {
    if (timer) {
      clearInterval(timer); // إذا كانت timer معرفة بالفعل، فقم بإيقافها
      timer = null; // اجعل timer يساوي null لإعادة استخدامها في المرة القادمة
    } else {
      timer = setInterval(displayTime, 1000); // إذا لم تكن timer معرفة، فقم بتعيين setInterval لتنفيذ displayTime كل ثانية
    }
  }
  
  function reset() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = "00:00:00";
  }

