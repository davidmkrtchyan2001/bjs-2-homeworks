"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = percent / 100 / 12;
  let loanAmount = amount - contribution;
  let payment =
    loanAmount *
    (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonths - 1));
  let totalSum = (payment * countMonths).toFixed(2);
  return Number(totalSum);
}
