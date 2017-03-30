var time = new Date()
var h = time.getHours() % 12 || 12;
var hh = h.toString();
var m = time.getMinutes().toString();
if (m < 10) {
  m = "0" + m;
}
var s = time.getSeconds().toString();


document.getElementById("time").innerHTML = hh + ":" + m + ":" + s;
