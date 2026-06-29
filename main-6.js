//  Патерн №6 — Групування
//Під час проходу по масиву я для кожного елемента шукаю його групу.
// Якщо групи ще немає — створюю її. Потім додаю елемент у цю групу.
//розкладати елементи по групах.
// if (!result[key]) {
//   result[key] = [];
// }

// result[key].push(item);

//1.Перевірити, чи існує група.
//2.Додати елемент у цю групу.
// const words = ["cat", "dog", "apple", "kiwi", "banana"];

// function groupWordsByLength(words) {
//   let result = {};

//   for (const word of words) {
//     const length = word.length;

//     if (!result[length]) {
//       result[length] = [];
//     }

//     result[length].push(word);
//   }

//   return result;
// }

// console.log(groupWordsByLength(words));

// {
//   3: ["cat", "dog"],
//   4: ["kiwi"],
//   5: ["apple"],
//   6: ["banana"]
// }
/////////////2
//Потрібно згрупувати їх.

// const grades = [5, 4, 5, 3, 4, 5];
// function groupGrades(grades) {
//   let result = {};
//   for (const grade of grades) {
//     if (!result[grade]) {
//       result[grade] = [];
//     }
//     result[grade].push(grade);
//   }
//   return result;
// }
// console.log(groupGrades(grades));
// {
//   3: [3],
//   4: [4, 4],
//   5: [5, 5, 5]
// }
//////////3
// const fruits = ["🍎", "🍌", "🍎", "🍇", "🍌", "🍎"];

// function groupFruits(fruits) {
//   let result = {};

//   for (const fruit of fruits) {
//     if (!result[fruit]) {
//       result[fruit] = [];
//     }
//     result[fruit].push(fruit);
//   }

//   return result;
// }

// console.log(groupFruits(fruits));

// {
//   "🍎": ["🍎", "🍎", "🍎"],
//   "🍌": ["🍌", "🍌"],
//   "🍇": ["🍇"]
// }

////////4
//Потрібно згрупувати імена за першою літерою.
// const names = ["Анна", "Олег", "Оксана", "Іван", "Андрій", "Іра"];
// function groupNames(names) {
//   let result = {};

//   for (const name of names) {
//     const firstLetter = name[0];
//     if (!result[firstLetter]) {
//       result[firstLetter] = [];
//     }
//     result[firstLetter].push(name);
//   }

//   return result;
// }

// console.log(groupNames(names));
// {
//   "А": ["Анна", "Андрій"],
//   "О": ["Олег", "Оксана"],
//   "І": ["Іван", "Іра"]
// }
