var setTime = function() {
  var time = document.getElementById("timeSet").value;
  var slice1 = time.substring(0,2);
  var slice2 = time.substring(3,5);


  if (slice1 >=  12) {
    slice2 = slice2 + " PM";
  } else {
    slice2 = slice2 + " AM";
  }
  slice1 = slice1 % 12 || 12;
  var joinAr = slice1 + ":" + slice2;

  var setTo = joinAr.toString();
  document.getElementById("showTimeSet").innerHTML = setTo;
  var getNumber = parseInt(slice1, slice2);
  var add = slice1 + slice2;
  console.log(add);
}


var startTime = function () {
var time = new Date()
var h = time.getHours();
var m = time.getMinutes();
console.log(m);
if (m < 10 ) {
  m = "0" + m;
}
if (h > 12) {
  m = m + " PM";
} else {
  m = m + " AM"
}
h = h % 12 || 12;
time = h + ":" + m;
document.getElementById("time").innerHTML = time.toString();
var t = setTimeout(startTime, 500);
time = h + m;
var getNumber = parseInt(time);
console.log(getNumber);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
checkTime();

// var time1 = setTime(time);
// var time2 = startTime(time);

function compare (time1, time2){
  if (time1 == time2) {
    alert("times up");
  }
}
compare();
