var setTiming = 0;

var setTime = function() {
  var userInput = document.getElementById("timeSet").value;
  var slice1 = userInput.substring(0,2);
  var slice2 = userInput.substring(3,5);
  var secondJoin = slice1 + slice2;
  setTiming = parseInt(secondJoin);
  if (slice1 >=  12) {
    slice2 = slice2 + " PM";
  } else {
    slice2 = slice2 + " AM";
  }
  slice1 = slice1 % 12 || 12;
  var joinAr = slice1 + ":" + slice2;

  var setTo = joinAr.toString();
  document.getElementById("showTimeSet").innerHTML = setTo;
}

var startTime = function () {
  time = new Date();
  h = time.getHours();
  m = time.getMinutes().toString()
  var newT = h + m;
  var convert = parseInt(newT);
  if (m < 10 ) {
    m = "0" + m;
  }
  if (h > 12) {
    m = m + " PM";
  } else {
    m = m + " AM"
  }
  h = h % 12 || 12;
  var time = h + ":" + m;
  var timeTo= time.toString();
  document.getElementById("time").innerHTML = timeTo;
  var t = setTimeout(startTime, 500);
  var audio = new Audio('dog.mp3');
  if (convert == setTiming) {
    audio.play();
  }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
checkTime();
