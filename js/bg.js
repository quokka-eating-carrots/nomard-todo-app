const bgImg = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const ranImg = bgImg[Math.floor(Math.random() * bgImg.length)];

const back = document.querySelector("div");

back.style = `background-image: url("./img/${ranImg}")`;