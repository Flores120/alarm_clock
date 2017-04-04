var setTime = function() {
  var time = document.getElementById("timeSet").value;
  var slice1 = time.substring(0,2);
  var slice2 = time.substring(3,5);
  var secondJoin = slice1 + slice2;
  var convert = parseInt(secondJoin);
  if (slice1 >=  12) {
    slice2 = slice2 + " PM";
  } else {
    slice2 = slice2 + " AM";
  }
  console.log(convert);
  slice1 = slice1 % 12 || 12;
  var joinAr = slice1 + ":" + slice2;

  var setTo = joinAr.toString();
  console.log(setTo);
  document.getElementById("showTimeSet").innerHTML = setTo;
}



var startTime = function () {
var time = new Date()
var h = time.getHours();
var m = time.getMinutes().toString()

var newT = h + m;
var convert = parseInt(newT);
console.log(convert);
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
var getNum = timeTo.valueOf();
document.getElementById("time").innerHTML = timeTo;
var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
checkTime();
