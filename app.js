// Leap year conditions
// 1 Year is divisible by 4
// 2 If year is divisible by 4, then it shouldn't be divisible by 100
// 3 if year is divisible by 4, not divisible by 100 and divisible by 400, then it is a leap year

let output;
const submitBtn = document.querySelector("button");
const showContent = document.querySelector(".show-content");
const input = document.querySelector("input");

function isLeapYear(year) {
  const returnMessage = `The Year ${year} Is A Leap Year`;
  const returnMessageNotLeap = `The Year ${year} Is Not A Leap Year`;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return returnMessage;
  } else {
    return returnMessageNotLeap;
  }
}

function isEmpty() {
  if (input.value === "") {
    output = `Please Enter A Valid Year`;
    showContent.innerHTML = output;
  } else {
    output = isLeapYear(input.value);
    showContent.innerHTML = output;
  }
}

function validateLeapYear() {
  isEmpty();
  setTimeout(function () {
    showContent.innerHTML = "";
    input.value = "";
  }, 4000);
}

submitBtn.addEventListener("click", validateLeapYear);
