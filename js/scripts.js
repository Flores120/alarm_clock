var setTiming = 0;

var setTime = function() {
  var userInput = document.getElementById("timeSet").value;
  var slice1 = userInput.substring(0,2);
  var slice2 = userInput.substring(3,5);
  var slice3 = "00";
  var secondJoin = slice1 + slice2 + slice3;
  setTiming = parseInt(secondJoin);
  if (slice1 >=  12) {
    slice2 = slice2 + " PM";
  } else {
    slice2 = slice2 + " AM";
  }
  slice1 = slice1 % 12 || 12;
  var joinAr = slice1 + ":" + slice2;

  var setTo = joinAr.toString();
  document.getElementById("showTimeSet").innerHTML = "Alarm set for " + setTo;
  $( document ).ready(function() {
    $("#showTimeSet").delay(2000).fadeOut("slow");
    document.getElementById("showTimeSet").style.padding = "10px";
    document.getElementById("showTimeSet").style.height =  "40px";
  });
}

var startTime = function () {
  time = new Date();
  h = time.getHours();
  m = time.getMinutes().toString();
  s = time.getSeconds().toString();
  if (m < 10 ) {
    m = "0" + m;
  }
  if (s < 10 ) {
    s = "0" + s;
  }
  var newT = h + m + s;
  var convert = parseInt(newT);
  if (h > 12) {
    m = m + " PM";
  } else {
    m = m + " AM"
  }
  h = h % 12 || 12;
 time = h + " : " + m;
  var timeTo= time.toString();
  document.getElementById("time").innerHTML =  timeTo;
  var t = setTimeout(startTime, 1000);
  var audio = new Audio('humble.mp3');
  if (convert == setTiming) {
    t = setTimeout(1);
    audio.play();
  }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
function snooze() {
  document.getElementById("bottomS").style.display = "none";
  document.getElementById("rightS").style.display = "none";
  document.getElementById("snoozeB").style.top = "20px";
  document.getElementById("snoozeB").style.left = "104px";

}
checkTime();
