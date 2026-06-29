//Паттерн 8: Два покажчики
//Під час проходу по відсортованому масиву я використовую два покажчики.
// На кожному кроці аналізую результат і рухаю один із покажчиків, щоб
// наблизитися до відповіді
//До цього ми працювали з одним елементом за раз.
//Тепер будемо працювати одразу з двома.
///Потрібно визначити, чи існують два числа, сума яких дорівнює 10
//Уяви, що масив містить 100 000 чисел.
//А Two Pointers дозволяє пройти масив майже один раз.

const numbers = [1, 2, 3, 4, 6, 8];
const target = 10;

function hasPairWithSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 6, 8], 10)); // true
console.log(hasPairWithSum([1, 2, 3, 4, 6, 8], 20)); // false
