let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hour = document.getElementById("hour");

function updateTime()
{
    let ss = new Date().getSeconds();
    let mm = new Date().getMinutes();
     let hh = new Date().getHours();
     
     sRotate = 6*ss;
     mRotate =6*mm;
     hRotate = 30*hh+mm/2;

     sec.style.transform = `rotate(${sRotate}deg)`;
     min.style.transform = `rotate(${mRotate}deg)`;
     hour.style.transform = `rotate(${hRotate}deg)`;
    }

setInterval(updateTime)