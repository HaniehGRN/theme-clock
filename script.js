const toggling_els = document.querySelectorAll(".toggle-hint");
const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const wday = document.querySelector(".wday");
const month = document.querySelector(".month");
const mday = document.querySelector(".mday");
const hour_symbl = document.querySelector(".hour");
const min_symbl = document.querySelector(".minute");
const sec_symbl = document.querySelector(".second");
const centeral_circle = document.querySelector(".center_circle");
var time_container = document.querySelector(".time-container");


function setDateTime() {

    var Datetime = new Date;
    //   set time
    var hour = Datetime.getHours();
    var min = Datetime.getMinutes();
    var sec = Datetime.getSeconds();
    setClock(hour, min, sec);
    var h = Datetime.getHours();
    var m = Datetime.getMinutes();
    var ampm = (h > 0 && h < 12) ? "AM" : "PM";
    time_container.innerText = h + ":" + 
        (m < 10 ? ('0' + m) : m) + ampm;
    //   set date
    var date = Datetime.toDateString().split(' ');
    wday.innerText = date[0];
    month.innerText = date[1];
    mday.innerText = date[2];
    
}

function setClock(hour, min, sec) {

    hour_symbl.style.transform = `rotate(${30 * hour}deg)`;
    min_symbl.style.transform = `rotate(${6 * min}deg)`;
    if (sec != 0) {
        sec_symbl.style.transform = `rotate(${6 * sec}deg)`;
    }
    else {
        sec_symbl.style.transform = `rotate(${360}deg)`;
    }
    centeral_circle.style.transform = `rotate(${6 * sec}deg)`;

}

setDateTime();

const interval = setInterval(() => {

    setDateTime();

}, 1000);


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        body.classList.toggle("light");
        body.classList.toggle("dark");
        toggling_els.forEach(elm => {
            elm.classList.toggle("dark");
            elm.classList.toggle("light");
        })

    })

})