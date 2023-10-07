const div_list = document.querySelectorAll(".ride-ele");
const btnStart = document.getElementById("stBtn");
const btnStop = document.getElementById("stopBtn");
const ado = document.getElementById("audio");
const rangeInput = document.getElementById('inputSlider');
const speed = document.getElementById('speedTxt');
const time = document.getElementById('timeTxt');

let colors_right = ["#962727", "#ec6666", "#eaadad", "white"];
let colors_left = ["#962727", "#ec6666", "#eaadad", "white"];
let setColor_right = [];
let setColor_left = [];

let interval;
let rightInterval;
let leftInterval;

let count = 0;
let animate_time = 50;
let wait_time = 2000;
let root = true;
let animaTime;


function setLeft() {
    clearInterval(leftInterval);
    leftInterval = setInterval(function () {
        setColor_left.unshift(colors_left[count]);
        for (let i = 0; i < 6; i++) {
            div_list[5 - i].style.backgroundColor = setColor_left[i];
        }
        count++;
    }, animate_time);
    clearInterval(rightInterval);
    setColor_left = [];
    count = 0;
}

function setRight() {
    clearInterval(rightInterval);
    rightInterval = setInterval(function () {
        setColor_right.unshift(colors_right[count]);
        for (let i = 0; i < 6; i++) {
            div_list[i].style.backgroundColor = setColor_right[i];
        }
        count++;
    }, animate_time);
    clearInterval(leftInterval);
    setColor_right = [];
    count = 0;
}

function animate() {
    if (root) {
        setRight();
        root = false;
    } else {
        setLeft();
        root = true;
    }
}

btnStart.addEventListener('click', function () {
    updateValue();
    ado.play();
});

function updateValue() {
    animate_time = rangeInput.value;
    wait_time = animate_time * 40;

    speed.textContent = rangeInput.value;
    time.textContent = wait_time;
    startAnima();
}

function startAnima() {
    clearInterval(interval);
    animaTime = animate_time * 12;
    console.log(animaTime)
    interval = setInterval(animate, animaTime);
}

btnStop.addEventListener('click', function () {
    clearInterval(interval);
    ado.pause();
});

rangeInput.addEventListener('input', updateValue);