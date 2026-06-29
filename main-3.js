//Паттерн 4 Чи існує елемент
//Під час проходу по масиву я перевіряю кожен елемент. Якщо знаходжу елемент, який відповідає умові, одразу повертаю true. Якщо після перевірки всього масиву такого елемента немає — повертаю false.
//А тут можна завершити роботу раніше.якщо знайшли елемент який потрібний
// Чи є в масиві потрібне число?
// const numbers = [5, 8, 2, 10, 3];

// function containsNumber(numbers, target) {
//   for (const num of numbers) {
//     if (num === target) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(containsNumber(numbers, 10)); // true
// console.log(containsNumber(numbers, 7)); // false
