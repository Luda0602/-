// Чи є в масиві потрібне число?
const numbers = [5, 8, 2, 10, 3];

function containsNumber(numbers, target) {
  for (const num of numbers) {
    if (num === target) {
      return true;
    }
  }

  return false;
}

console.log(containsNumber(numbers, 10)); // true
console.log(containsNumber(numbers, 7)); // false
