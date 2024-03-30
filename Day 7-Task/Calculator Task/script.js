// for content div
let forContent = document.createElement("div");
forContent.setAttribute("id", "content");
forContent.setAttribute("class", "class-content");

// for H1 title div
let forTitle = document.createElement("h1");
forTitle.innerText = `Calculator`;
forTitle.setAttribute("id", "title");

// for Explaination
let forParaDiv = document.createElement("p");
forParaDiv.setAttribute("id", "description");
forParaDiv.innerText = `Here we able to perform the Addition, Subtraction, Multiplication, Division and Modulation. `;

//for Calc
let forcard = document.createElement("div");
forcard.setAttribute("class", "card");

//for calc Input result
let forInputDiv = document.createElement("div");
forInputDiv.setAttribute("class", "input-div");
let forInput = document.createElement("input");
forInputDiv.append(forInput);
forInput.setAttribute("type", "text");
forInput.setAttribute("class", "input");
forInput.setAttribute("id", "result");
forInput.setAttribute("placeholder", "0");
forInput.setAttribute("name", "input number");
forcard.append(forInputDiv);
let forRow1 = document.createElement("div");
forRow1.setAttribute("class", "row-1");
forcard.append(forRow1);
// for modulo-btn
let forModuloBtn = document.createElement("button");
forModuloBtn.setAttribute("class", "btn");
forModuloBtn.setAttribute("id", "%");
forModuloBtn.setAttribute("onclick", "display(`%`)");
forModuloBtn.innerText = `%`;
forRow1.append(forModuloBtn);
// for CE-btn
let forCeBtn = document.createElement("button");
forCeBtn.setAttribute("id", "clear");
forCeBtn.setAttribute("class", "btn");
forCeBtn.setAttribute("onclick", "clear()");
forCeBtn.innerText = `CE`;
forRow1.append(forCeBtn);

//for delete-btn
let forDeleteBtn = document.createElement("button");
forDeleteBtn.setAttribute("class", "btn");
forDeleteBtn.setAttribute("onclick", "del()");
forDeleteBtn.innerHTML = `<i class="fa-solid fa-delete-left"></i>`;
forRow1.append(forDeleteBtn);
let forDivideBtn = document.createElement("button");
forDivideBtn.setAttribute("class", "btn");
forDivideBtn.setAttribute("id", "divi");
forDivideBtn.setAttribute("onclick", "display(`/`)");
forDivideBtn.innerHTML = `<i class="fa-solid fa-divide"></i>`;
forRow1.append(forDivideBtn);
//For row-2
let forRow2 = document.createElement("div");
forRow2.setAttribute("class", "row-2");
forcard.append(forRow2);

//For Num 7
let forNum7Btn = document.createElement("button");
forNum7Btn.setAttribute("class", "btn");
forNum7Btn.setAttribute("id", "7");
forNum7Btn.setAttribute("onclick", "display(`7`)");
forNum7Btn.innerText = `7`;
forRow2.append(forNum7Btn);
//For Num 8
let forNum8Btn = document.createElement("button");
forNum8Btn.setAttribute("class", "btn");
forNum8Btn.setAttribute("id", "8");
forNum8Btn.setAttribute("onclick", "display(`8`)");
forNum8Btn.innerText = `8`;
forRow2.append(forNum8Btn);
//for Num 9
let forNum9Btn = document.createElement("button");
forNum9Btn.setAttribute("class", "btn");
forNum9Btn.setAttribute("id", "9");
forNum9Btn.setAttribute("onclick", "display(`9`)");
forNum9Btn.innerText = `9`;
forRow2.append(forNum9Btn);
//for Multiply
let forMulBtn = document.createElement("button");
forMulBtn.setAttribute("class", "btn");
forMulBtn.setAttribute("id", "mul");
forMulBtn.setAttribute("onclick", "display(`*`)");
forMulBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
forRow2.append(forMulBtn);
//for row 3
let forRow3 = document.createElement("div");
forRow3.setAttribute("class", "row-3");
forcard.append(forRow3);
//For Num 4
let forNum4Btn = document.createElement("button");
forNum4Btn.setAttribute("class", "btn");
forNum4Btn.setAttribute("id", "4");
forNum4Btn.setAttribute("onclick", "display(`4`)");
forNum4Btn.innerText = `4`;
forRow3.append(forNum4Btn);
//For Num 5
let forNum5Btn = document.createElement("button");
forNum5Btn.setAttribute("class", "btn");
forNum5Btn.setAttribute("id", "5");
forNum5Btn.setAttribute("onclick", "display(`5`)");
forNum5Btn.innerText = `5`;
forRow3.append(forNum5Btn);
//For Num 6
let forNum6Btn = document.createElement("button");
forNum6Btn.setAttribute("class", "btn");
forNum6Btn.setAttribute("id", "6");
forNum6Btn.setAttribute("onclick", "display(`6`)");
forNum6Btn.innerText = `6`;
forRow3.append(forNum6Btn);
//for subtraction
let forSubBtn = document.createElement("button");
forSubBtn.setAttribute("id", "subtract");
forSubBtn.setAttribute("onclick", "display(`-`)");
forSubBtn.setAttribute("class", "btn");
forSubBtn.innerHTML = `-`;
forRow3.append(forSubBtn);
let forRow4 = document.createElement("div");
forRow4.setAttribute("class", "row-4");
forcard.append(forRow4);
//For Num 1
let forNum1Btn = document.createElement("button");
forNum1Btn.setAttribute("id", "1");
forNum1Btn.setAttribute("class", "btn");
forNum1Btn.setAttribute("onclick", "display(`1`)");
forNum1Btn.innerText = `1`;
forRow4.append(forNum1Btn);
//For Num 2
let forNum2Btn = document.createElement("button");
forNum2Btn.setAttribute("id", "2");
forNum2Btn.setAttribute("class", "btn");
forNum2Btn.setAttribute("onclick", "display(`2`)");
forNum2Btn.innerText = `2`;
forRow4.append(forNum2Btn);
//For Num 3
let forNum3Btn = document.createElement("button");
forNum3Btn.setAttribute("id", "3");
forNum3Btn.setAttribute("class", "btn");
forNum3Btn.setAttribute("onclick", "display(`3`)");
forNum3Btn.innerText = `3`;
forRow4.append(forNum3Btn);
//for plus
let forPlusBtn = document.createElement("button");
forPlusBtn.setAttribute("id", "add");
forPlusBtn.setAttribute("onclick", "display(`+`)");
forPlusBtn.setAttribute("class", "btn");
forPlusBtn.innerHTML = `+`;
forRow4.append(forPlusBtn);
//for row 5
let forRow5 = document.createElement("div");
forRow5.setAttribute("class", "row-5");
forcard.append(forRow5);
//For dot
let forDotBtn = document.createElement("button");
forDotBtn.setAttribute("class", "btn");
forDotBtn.setAttribute("onclick", "display(`.`)");
forDotBtn.innerText = `.`;
forRow5.append(forDotBtn);
//For zero
let forZeroBtn = document.createElement("button");
forZeroBtn.setAttribute("class", "btn");
forZeroBtn.setAttribute("id", "0");
forZeroBtn.setAttribute("onclick", "display(`0`)");
forZeroBtn.innerText = `0`;
forRow5.append(forZeroBtn);
//For equal
let forEqualBtn = document.createElement("button");
forEqualBtn.setAttribute("id", "equal");
forEqualBtn.setAttribute("class", "btn");
forEqualBtn.innerText = `=`;
forRow5.append(forEqualBtn);

// for container div append for title
let forContainer = document.querySelector(".container");
forContainer.append(forContent);
forContent.append(forTitle);

// for container div append for Explaination
forContent.append(forParaDiv);

//for calc-content append
let forCalcContent = document.querySelector(".calc-content");
forCalcContent.append(forcard);
let input = document.querySelector(".input");
let operForEqual = document.querySelector("#equal");
let operForClear = document.querySelector("#clear");
function display(result) {
  input.value += result;
  forInput.setAttribute("value", "");
}
operForEqual.addEventListener("click", function () {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = `Syntax Error`;
    document.querySelector("#result").style.backgroundColor = "#6D2932";
    document.querySelector("#result").style.color = "#E8D8C4";
  }
});
operForClear.addEventListener("click", function () {
  input.value = "";
  document.querySelector("#result").style.backgroundColor =
    "rgb(232, 216, 196, 0.5)";
  document.querySelector("#result").style.color = "#6d2932";
});

function del() {
  input.value = input.value.slice(0, -1);
}
