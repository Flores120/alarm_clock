var time = new Date()
var h = time.getHours() % 12 || 12;
var hh = h.toString();
var m = time.getMinutes().toString();
var s = time.getSeconds().toString();

function checkTime() {
  if (m < 10) {
    m = "0" + m;
  } if (s < 10) {
    s = "0" + s;
  }
}
checkTime();
document.getElementById("time").innerHTML = hh + ":" + m + ":" + s;
