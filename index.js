let h1 = document.getElementById("heading");
let hourstick = document.getElementById("hour");
let minuteStick = document.getElementById("min");
let secStick = document.getElementById("sec");
let stopBtn = document.getElementById("stop");
let startbtn = document.getElementById("start");
let k;
setInterval(() => {
  let d = new Date();
  let min = d.getMinutes();
  let hour = d.getHours();
  let sec = d.getSeconds();

  let hr_rotate = 30 * hour + min / 2;
  let min_rotate = 6 * min;
  let sec_rotate = 6 * sec;

  hourstick.style.transform = `rotate(${hr_rotate}deg)`;
  minuteStick.style.transform = `rotate(${min_rotate}deg)`;
  secStick.style.transform = `rotate(${sec_rotate}deg)`;
}, 1000);

stopBtn.onclick = () => {
  clearInterval(k);
};
startbtn.onclick = () => {
  func();
};
