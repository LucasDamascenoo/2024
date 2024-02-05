const delay = document.querySelector(".delay");
const fz = document.querySelector(".fz");
const btn = document.querySelector(".btn-fz");

function chanceFz() {
  setTimeout(() => {
    fz.style.fontSize = "6.25rem";
  }, 3000);
}

btn.addEventListener("click", chanceFz);

//// setInterval

const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const secondsBtn = document.querySelector(".seconds");

// let interval = 0;
// let seconds = 0;

// function onStart() {
//   onStop();

//   interval = setInterval(() => {
//     seconds += 1;
//     secondsBtn.textContent = `Seconds: ${seconds}`;
//   }, 1000);
// }

// function onStop() {
//   clearInterval(interval);
// }

start.addEventListener("click", () => {
  secondsBtn.textContent = "foi?";
});
