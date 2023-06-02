// 1 load이벤트에 적용해서 그려지는 애니메이션을 연동하는 코드
/*
const block = document.querySelectorAll(".block");
window.addEventListener("load", function () {
    block.forEach((el) => {
        let numElement = el.querySelector(".num");
        let num = parseInt(numElement.innerText);
        // parseInt : ()의 값을 정수로 변환한다
        let count = 0;
        let time = 2000 / num;
        let circle = el.querySelector(".circle");
        setInterval(() => {
            if (count == num) {
                clearInterval();
            } else {
                count += 1;
                numElement.innerText = count;
            }
        }, time);

        circle.style.strokeDashoffset = 503 - (503 * (num / 100));

        let dot = el.querySelector(".dot");
        dot.style.transform = `rotate(${360 * (num / 100)}deg)`;

        if (num == 100) {
            dot.style.opacity = 0;
        }
    });
});
*/

// 2 scroll 연동으로 구현 (오류)
/*
let sections = document.querySelectorAll("section");
let posArr = [];
for (let el of sections) posArr.push(el.offsetTop);
// console.log(posArr);
window.addEventListener("scroll", () => {
    const scroll = window.screenY || window.pageYOffset;
    scroll > posArr[1] && startSVG(); // 스크롤을 할 때마다 startSVG 함수가 실행된다
})

function startSVG() {
    const block = document.querySelectorAll(".block");
    block.forEach((el) => {
        let numElement = el.querySelector(".num");
        let num = parseInt(numElement.innerText);
        let count = 0;
        let time = 2000 / num;
        let circle = el.querySelector(".circle");
        setInterval(() => {
            if (count == num) {
                clearInterval();
            } else {
                count += 1;
                numElement.innerText = count;
            }
        }, time);

        circle.style.strokeDashoffset = 503 - (503 * (num / 100));

        let dot = el.querySelector(".dot");
        dot.style.transform = `rotate(${360 * (num / 100)}deg)`;

        if (num == 100) {
            dot.style.opacity = 0;
        }
    });
}
*/
// 3 오류가 없는 scroll 연동 코드: 함수를 한 번만 실행
let sections = document.querySelectorAll("section");
let posArr = [];
for (let el of sections) posArr.push(el.offsetTop);
const block = document.querySelectorAll(".block");
let isOn = true;
window.addEventListener("scroll", () => {

    if (isOn && window.scrollY >= posArr[1]) {
        isOn = false;
        startSVG();
    }
})

function startSVG() {
    block.forEach((el) => {
        let numElement = el.querySelector(".num");
        let num = parseInt(numElement.innerText);
        let count = 0;
        let time = 2000 / num;
        let circle = el.querySelector(".circle");
        setInterval(() => {
            if (count == num) {
                clearInterval();
            } else {
                count += 1;
                numElement.innerText = count;
            }
        }, time);

        circle.style.strokeDashoffset = 503 - (503 * (num / 100));

        let dot = el.querySelector(".dot");
        dot.style.transform = `rotate(${360 * (num / 100)}deg)`;

        if (num == 100) {
            dot.style.opacity = 0;
        }
    });
}