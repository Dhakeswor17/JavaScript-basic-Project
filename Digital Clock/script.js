const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("second");
const ampm = document.getElementById("ampm");
function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    
    if(h>12){
        h = h-12;
        ampm.innerText = "PM"
       
    }
    h = h < 10 ? "0"+ h:h;
    m =m < 10 ? "0" + m :m;
    s = s < 10? "0"+s :s;
    hourE1.innerText = h;
    minutesE1.innerHTML =m;
    secondE1.innerHTML = s;
    setTimeout(()=>{
        updateTime();

    },1000)
    
}

updateTime();