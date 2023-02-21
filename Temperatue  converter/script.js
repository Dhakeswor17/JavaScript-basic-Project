let fah = document.getElementById("num1");
let cel = document.getElementById("num2");
let btn1 = document.getElementById("fah-con");
let btn2 = document.getElementById("cal-con");

fah.addEventListener('input', function() {
    let f = this.value;


    c = (5 / 9) * (f - 32);

    c = c.toFixed(2);


});
btn1.addEventListener('click', function() {
    cel.value = c;
    //if (!Number.isInteger(c)) {

    //c = c.toFixed(2);


    //}
});
cel.addEventListener('input', function() {
    let c = this.value;
    f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(2);

    }

});
btn2.addEventListener('click', function() {
    fah.value = f;
});
let clear = document.getElementById("clear");
document.querySelector("clear");
clear.addEventListener('click', function() {
    if (clear.click) {
        fah.value = " ";

    }
    if (clear.click) {
        cel.value = "";

    }

})