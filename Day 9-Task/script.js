alert(
  "Just to let you know, please click on the button and wait for 10 seconds to see the magic happen."
);
let container = document.querySelector(".container");
let forHearder = document.createElement("div");

let forBtn = document.createElement("div");
forBtn.setAttribute("class", "btn removebtn");
let btn = document.createElement("button");
btn.setAttribute("id", "button");
btn.innerText = `Click here to start the count`;
forBtn.append(btn);
container.append(forBtn);
forHearder.setAttribute("class", "header removeheader");
forHearder.innerHTML = `<h1>Call back hell task</h1>`;
container.append(forHearder);
container.append(forBtn);
let count = 0;
let forCountdown = document.querySelector(".countdown");
let forCountContent = document.createElement("p");
console.log(forCountContent);
forCountContent.innerText = `Countdown : ${count}`;
forCountdown.append(forCountContent);
//remove
document.querySelector(".removebackground").classList.remove("background");
document.querySelector(".removeheader").classList.remove("header");
document.querySelector(".removebtn").classList.remove("btn");
document.querySelector(".removecountdown").classList.remove("countdown");
let forCountBtn = document.querySelector("#button");
forCountBtn.addEventListener("click", function () {
  setTimeout(() => {
    forCountContent.innerText = `Countdown :${1}`;
    setTimeout(() => {
      forCountContent.innerText = `Countdown :${2}`;
      setTimeout(() => {
        forCountContent.innerText = `Countdown :${3}`;
        setTimeout(() => {
          forCountContent.innerText = `Countdown :${4}`;
          setTimeout(() => {
            forCountContent.innerText = `Countdown :${5}`;
            setTimeout(() => {
              forCountContent.innerText = `Countdown :${6}`;
              setTimeout(() => {
                forCountContent.innerText = `Countdown :${7}`;
                setTimeout(() => {
                  forCountContent.innerText = `Countdown :${8}`;
                  setTimeout(() => {
                    forCountContent.innerText = `Countdown :${9}`;
                    setTimeout(() => {
                      forCountContent.innerText = `Happay Independance Day!!!`;
                      document
                        .querySelector(".removebackground")
                        .classList.add("background");
                      document
                        .querySelector(".removeheader")
                        .classList.add("header");
                      document.querySelector(".removebtn").classList.add("btn");
                      document
                        .querySelector(".removecountdown")
                        .classList.add("countdown");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
