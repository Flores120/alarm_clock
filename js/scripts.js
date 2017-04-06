var setTiming = 0;
var audio = new Audio('humble.mp3');

var setTime = function() {
  var userInput = document.getElementById("timeSet").value;
  var slice1 = userInput.substring(0,2);
  var slice2 = userInput.substring(3,5);
  var slice3 = "00";
  var secondJoin = slice1 + slice2 + slice3;
  setTiming = parseInt(secondJoin);
  console.log(setTiming);
  if (slice1 >=  12) {
    slice2 = slice2 + " PM";
  } else {
    slice2 = slice2 + " AM";
  }
  slice1 = slice1 % 12 || 12;
  var joinAr = slice1 + ":" + slice2;

  var setTo = joinAr.toString();
  if (userInput == "" ) {
    document.getElementById("showTimeSet").innerHTML = "Please set a time";
  }
   else {
     document.getElementById("showTimeSet").innerHTML = "Alarm set for " + setTo;
   }
  $( document ).ready(function() {
    $("#showTimeSet").delay(2000).fadeOut("slow");
    document.getElementById("showTimeSet").style.padding = "10px";
    document.getElementById("showTimeSet").style.height =  "40px";
  });
}

var startTime = function () {
  currentTime = new Date();
  // document.getElementById("date").innerHTML =  currentTime;
  h = currentTime.getHours();
  m = currentTime.getMinutes().toString();
  s = currentTime.getSeconds().toString();
  if (m < 10 ) {
    m = "0" + m;
  }
  if (s < 10 ) {
    s = "0" + s;
  }
  var newT = h + m + s;
  currentTime = parseInt(newT);
  // console.log(currentTime);
   if (h > 12) {
    var pm  = "PM";
  } else {
    var am  = "AM";
  }
  var amPM = pm || am;
  h = h % 12 || 12;
  time = h + ":" + m;
  var timeTo= time.toString();
  document.getElementById("time").innerHTML =  timeTo;
  document.getElementById("seconds").innerHTML =  s;
  document.getElementById("am").innerHTML =  amPM;
  var t = setTimeout(startTime, 1000);
  if (currentTime == setTiming) {
    audio.play();
  }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function snooze() {
  audio.currentTime = 100;
  document.getElementById("bottomS").style.height = "0px";
  document.getElementById("rightS").style.width = "0px";
  document.getElementById("bottomS").style.height = "0px";
  document.getElementById("rightS").style.width = "0px";
  document.getElementById("snoozeB").style.transform = "translateY(5px)"
  if (currentTime == setTiming) {
    audio.play();
  }
}
checkTime();
