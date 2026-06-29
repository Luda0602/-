//Патерн №7 — Підрахунок кількості
//будемо рахувати, скільки разів зустрічається кожен елемент.
const fruits = ["🍎", "🍌", "🍎", "🍇", "🍌", "🍎"];
function countFruits(fruits) {
  let result = {};

  for (const fruit of fruits) {
    if (!result[fruit]) {
      result[fruit] = 0;
    }
    result[fruit]++;
  }

  return result;
}
console.log(countFruits(fruits));
// {
//   "🍎": 3,
//   "🍌": 2,
//   "🍇": 1
// }
