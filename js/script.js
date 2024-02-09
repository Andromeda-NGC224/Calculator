`use strict`;

const form = document.querySelector(".form");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const signs = document.querySelector(`[name="signs"]`);
const result = document.querySelector(".result");
const button = document.querySelector(".button");

form.addEventListener(`submit`, foo);

function foo(event) {
  event.preventDefault();
  let num1Value = parseFloat(num1.value);
  let num2Value = parseFloat(num2.value);
  let signValue = signs.value;

  let resultCount;

  switch (signValue) {
    case `+`:
      resultCount = num1Value + num2Value;
      break;
    case `-`:
      resultCount = num1Value - num2Value;
      break;
    case `*`:
      resultCount = num1Value * num2Value;
      break;
    case `/`:
      if (num2Value === 0) {
        alert(`На нуль ділити не можна.`);
      } else {
        resultCount = num1Value / num2Value;
      }
      break;
  }

  result.value = resultCount;
}
