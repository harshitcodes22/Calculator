"use strict";

const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".result");
let version;
let digit = "";
let operation = 0;
let ver;
const operator = function (inp) {
  console.log(inp);
  switch (inp) {
    case "+":
      operation = operation + Number(digit);
      break;

    case "-":
      operation = Number(digit) - operation;
      break;
    case "*":
      operation = Number(digit) * operation;
      break;
    case "/":
      operation = Number(digit) - operation;
      break;
  }
};
btn.forEach(function (el) {
  el.addEventListener("click", function (e) {
    version = el.dataset.versionNumber;

    //operation for addition
    ////////////////////////
    if (version === "=") {
      operator(ver);
      display.textContent = operation;
    } else if (
      version === "+" ||
      version === "-" ||
      version === "*" ||
      version === "/"
    ) {
      operator(version);
      ver = version;

      digit = "";
      console.log(operation);
    } else {
      digit = digit + version;
      display.textContent = `${digit}`;
    }
  });
});
