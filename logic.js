document.addEventListener("DOMContentLoaded", function () {

  // Result to be displayed
  let result = "";
  let display = document.getElementById("display");
  let btns = document.getElementsByClassName("btn");
  let ac = document.getElementById("ac");
  let plus = document.getElementById("plus");
  let minus = document.getElementById("minus");
  let multiply = document.getElementById("multiply");
  let divide = document.getElementById("divide");
  let sqrt = document.getElementById("sqrt");
  let clr = document.getElementById("clr");

  ac.addEventListener("click", clearDisplay);
  plus.addEventListener("click", sum);
  minus.addEventListener("click", subtract);
  multiply.addEventListener("click", multiple);
  divide.addEventListener("click", division);
  clr.addEventListener("click", backspace);
  
  function sum() {
    if (result.length != 0) {
      if (result[result.length - 1] != "+") {
        if (["-", "/", "*"].includes(result.slice(-1))) {
          result = result.slice(0, -1) + "+";
        } else {
          result = result + "+";
        }
        display.value = result;
      } else {
        return;
      }
    }
    return;
  }

  function subtract() {
    if (result.length != 0) {
      if (result[result.length - 1] != "-") {
        if (["+", "/", "*"].includes(result.slice(-1))) {
          result = result.slice(0, -1) + "-";
        } else {
          result += "-";
        }
        display.value = result;
      } else {
        return;
      }
    }
    return;
  }

  function multiple() {
    if (result.length != 0) {
      if (result[result.length - 1] != "*") {
        if (["-", "/", "+"].includes(result.slice(-1))) {
          result = result.slice(0, -1) + "*";
        } else {
          result = result + "*";
        }
        display.value = result;
      } else {
        return;
      }
    }
    return;
  }

  function division() {
    if (result.length != 0) {
      if (result[result.length - 1] != "/") {
        if (["-", "*", "+"].includes(result.slice(-1))) {
          result = result.slice(0, -1) + "/";
        } else {
          result = result + "/";
        }
        display.value = result;
      } else {
        return;
      }
    }
    return;
  }

function backspace(){
    result = result.slice(0,-1);
    display.value = result
}


  function calculateResult() {}

  function clearDisplay() {
    result = "";
    display.value = result;
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      result = result + this.innerText;
      display.value = result;
    });
  }
});
