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
    } else {
     document.getElementById("showTimeSet").innerHTML = "Alarm set for " + setTo;
    }
  $( document ).ready(function() {
    $("#showTimeSet").delay(2000).fadeOut("slow");
      document.getElementById("showTimeSet").style.padding = "10px";
      document.getElementById("showTimeSet").style.height =  "40px";
  });
}

var currentTime = new Date();

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
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
  var date = new Date();
  // var month = date.getUTCMonth() + 1; //months from 1-12
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  var newdate = monthNames[date.getMonth()] + " " + day + " " +  year;
  document.getElementById("date").innerHTML = newdate;

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function snooze() {
  audio.currentTime = 100;
  document.getElementById("bottomS").style.height = "5px";
  document.getElementById("bottomS").style.left = "99px";
  document.getElementById("bottomS").style.top = "-15px";
  document.getElementById("rightS").style.top = "-13px";
  document.getElementById("rightS").style.width = "8px";
  document.getElementById("snoozeB").style.transform = "translateY(5px)"
  if (currentTime == setTiming) {
    audio.play();
  }
}
checkTime();
