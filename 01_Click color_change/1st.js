// generate a random color 

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color

}



let IntervalId
const StartChanginColor = function () {
    if(! IntervalId){
        IntervalId = setInterval(changeBGcolor, 1000);
    }

    function changeBGcolor() {
        document.body.style.backgroundColor = randomColor();

    }
};

const StopChanginColor = function () {
    clearInterval(IntervalId);
    IntervalId = null;
}

document.querySelector("#start").
    addEventListener("click", StartChanginColor);


document.querySelector("#stop").
    addEventListener("click", StopChanginColor);


