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
  let decimal = document.getElementById("decimal");
  let eql = document.getElementById("eql");

  // Event Listener
  ac.addEventListener("click", clearDisplay);
  plus.addEventListener("click", sum);
  minus.addEventListener("click", subtract);
  multiply.addEventListener("click", multiple);
  divide.addEventListener("click", division);
  clr.addEventListener("click", backspace);
  sqrt.addEventListener("click", root);
  decimal.addEventListener("click", point);
  eql.addEventListener("click", () => {
    display.value = calculateResult(result);
    result = display.value;
  });

  // TO add plus sign

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

  // TO add minus sign
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

  // TO add multiply sign

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

  // TO add division sign

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

  // To move one step back
  function backspace() {
    result = result.slice(0, -1);
    display.value = result;
  }

  // To add sqrt
  function root() {
    if (result.length == 0) {
      result += "sqrt";
      display.value = result;
    } else {
      window.alert("in-correct operation");
    }
  }

  // TO add decimal

  function point() {
    if (result.slice(-1) != ".") {
      result += ".";
      display.value = result;
    }
  }

  // It trigger after clicking on equal to button

  function calculateResult(str) {
    console.log(str);
    let arr = [];
    str = str.toString();
    let flag = true;
    let num = 0;
    if (str.length != 0) {
      if (str[0] == "s") {
        flag = false;
        str = str.slice(4);
        if (
          str.slice(-1) == "+" ||
          str.slice(-1) == "-" ||
          str.slice(-1) == "*" ||
          str.slice(-1) == "/"
        ) {
          for (let i = 0; i < str.length - 1; i++) {
            if (
              str[i] == "+" ||
              str[i] == "-" ||
              str[i] == "*" ||
              str[i] == "/"
            ) {
              arr.push(Number(num));
              num = 0;
              arr.push(str[i]);
            } else if (i == str.length - 2) {
              arr.push(Number(num + str[i]));
              num = 0;
            } else {
              num += str[i];
            }
          }
        } else {
          for (let i = 0; i < str.length; i++) {
            if (
              str[i] == "+" ||
              str[i] == "-" ||
              str[i] == "*" ||
              str[i] == "/"
            ) {
              arr.push(Number(num));
              num = 0;
              arr.push(str[i]);
            } else if (i == str.length - 1) {
              arr.push(Number(num + str[i]));
              num = 0;
            } else {
              num += str[i];
            }
          }
        }
      } else {
        if (
          str.slice(-1) == "+" ||
          str.slice(-1) == "-" ||
          str.slice(-1) == "*" ||
          str.slice(-1) == "/"
        ) {
          for (let i = 0; i < str.length - 1; i++) {
            if (
              str[i] == "+" ||
              str[i] == "-" ||
              str[i] == "*" ||
              str[i] == "/"
            ) {
              arr.push(Number(num));
              num = 0;
              arr.push(str[i]);
            } else if (i == str.length - 2) {
              arr.push(Number(num + str[i]));
              num = 0;
            } else {
              num += str[i];
            }
          }
        } else {
          for (let i = 0; i < str.length; i++) {
            if (
              str[i] == "+" ||
              str[i] == "-" ||
              str[i] == "*" ||
              str[i] == "/"
            ) {
              arr.push(Number(num));
              num = 0;
              arr.push(str[i]);
            } else if (i == str.length - 1) {
              arr.push(Number(num + str[i]));
              num = 0;
            } else {
              num += str[i];
            }
          }
        }
      }

      while (arr.length != 1) {
        if (arr.indexOf("/") != -1) {
          while (arr.indexOf("/") != -1) {
            // [1,2,5,7,8]
            let index = arr.indexOf("/");
            let final = arr[index - 1] / arr[index + 1];
            arr.splice(index - 1, 3, final);
          }
        }
        if (arr.indexOf("*") != -1) {
          while (arr.indexOf("*") != -1) {
            // [1,2,5,7,8]
            let index = arr.indexOf("*");
            let final = arr[index - 1] * arr[index + 1];
            arr.splice(index - 1, 3, final);
          }
        }
        if (arr.indexOf("+") != -1) {
          while (arr.indexOf("+") != -1) {
            // [1,2,5,7,8]
            let index = arr.indexOf("+");
            let final = arr[index - 1] + arr[index + 1];
            arr.splice(index - 1, 3, final);
          }
        }
        if (arr.indexOf("-") != -1) {
          while (arr.indexOf("-") != -1) {
            // [1,2,5,7,8]
            let index = arr.indexOf("-");
            let final = arr[index - 1] - arr[index + 1];
            arr.splice(index - 1, 3, final);
          }
        }
      }
      if (flag) {
        return arr[0].toFixed(2);
      } else {
        return Math.sqrt(arr[0]).toFixed(4);
      }
    } else {
      return 0;
    }
  }

  // For ac button

  function clearDisplay() {
    result = "";
    display.value = result;
  }

  // applying event listener for all number

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      result = result + this.innerText;
      display.value = result;
    });
  }
});
