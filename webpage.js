// let number = document.getElementById("number");
// let count = 0;
// setInterval(() => {
//     if (count == 71) {
//         clearInterval();
//     }
//     else {
//         count += 1;
//         number.innerHTML = `${count}%`;
//     }
// }, 80);




// let number1 = document.getElementById("number1");
// let count1 = 0;
// setInterval(() => {
//     if (count1 == 89) {
//         clearInterval();
//     }
//     else {
//         count1 += 1;
//         number1.innerHTML = `${count1}%`;
//     }
// }, 90);




// let number2 = document.getElementById("number2");
// let count2 = 0;
// setInterval(() => {
//     if (count2 == 88) {
//         clearInterval();
//     }
//     else {
//         count2 += 1;
//         number2.innerHTML = `${count2}%`;
//     }
// }, 90);



// let number3 = document.getElementById("number3");
// let count3 = 0;
// setInterval(() => {
//     if (count3 == 62) {
//         clearInterval();
//     }
//     else {
//         count3 += 1;
//         number3.innerHTML = `${count3}%`;
//     }
// }, 110);



const c2 = document.querySelector(".c2");
let count = 200;

setInterval(() => {

    if (count < 100) {
        clearInterval();
    }
    else {
        count = 180;
        c2.style.strokeDashoffset = count;
    }
}, 1000);


////


const c3 = document.querySelector(".c3");
let count2 = 200;

setInterval(() => {

    if (count2 < 100) {
        clearInterval();
    }
    else {
        count2 = 70;
        c3.style.strokeDashoffset = count2;
    }
}, 1000);
///////

const c4 = document.querySelector(".c4");
let count3 = 200;

setInterval(() => {

    if (count3 < 100) {
        clearInterval();
    }
    else {
        count3 = 80;
        c4.style.strokeDashoffset = count3;
    }
}, 1000);


//////

const c5 = document.querySelector(".c5");
let count4 = 200;

setInterval(() => {

    if (count4 < 100) {
        clearInterval();
    }
    else {
        count4 = 230;
        c5.style.strokeDashoffset = count4;
    }
}, 1000);