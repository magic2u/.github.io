//gallery
//nodelist 類似array
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    // console.log(123);
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//dayleft
const day = document.getElementById("dayleft");
day.innerText = dayleft();

function dayleft() {
  var now = new Date();
  var spday = new Date(2023, 1 - 1, 14); //js 從第0月開始
  a = (spday.getTime() - now.getTime()) / (24 * 60 * 60 * 1000);
  a = Math.ceil(a);
  if (a == 0) {
    return "就在今天! 歡迎蒞臨";
  } else if (a < 0) {
    return "完美落幕，感謝參與!";
  }

  return `還有${a}天`;
}

//header
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

//car

const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs div");

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  const img1 = document.querySelector(".car_img-1");
  let img1Data = img1.getBoundingClientRect();
  let imgwidth = img1Data.width;

  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * imgwidth}px)`;
}

function resetInterval() {
  //讓inter重置才不會在按按鈕時互衝
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
