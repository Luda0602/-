///1 паттерн: Пошук найкращого
//Під час проходу по масиву ми зберігаємо поточну найкращу відповідь у змінній.
// Якщо черговий елемент краще відповідає умові, оновлюємо змінну. Після завершення проходу повертаємо її.
// const words = ["cat", "elephant", "dog", "javascript"];

// function findLongest(words) {
//   let longWord = words[0];
//   for (const word of words) {
//     if (longWord.length < word.length) {
//       longWord = word;
//     }
//   }
//   return longWord;
// }
// console.log(findLongest(words));
////2
//Потрібно повернути об'єкт працівника, у якого найбільша зарплата.
// const employees = [
//   { name: "Anna", salary: 1200 },
//   { name: "Oleg", salary: 2000 },
//   { name: "Kate", salary: 1800 },
// ];
// function findRichest(employees) {
//   let maxSalary = employees[0];
//   for (const item of employees) {
//     if (maxSalary.salary < item.salary) {
//       maxSalary = item;
//     }
//   }
//   return maxSalary;
// }
// console.log(findRichest(employees));

///3
//Є масив чисел:
// const numbers = [-5, -12, 8, -3, 10, -1];
// //Потрібно повернути найменше число.
// function findMin(numbers) {
//   let minNum = numbers[0];
//   for (const num of numbers) {
//     if (minNum > num) {
//       minNum = num;
//     }
//   }
//   return minNum;
// }
// console.log(findMin(numbers));

///////////////////////////////////4////////////////////////
//Потрібно повернути назву книги, у якої найбільше сторінок.

// const books = [
//   { title: "JS", pages: 250 },
//   { title: "React", pages: 420 },
//   { title: "CSS", pages: 180 },
//   { title: "TypeScript", pages: 380 },
// ];
// function findBookWithMostPages(books) {
//   let maxCountPages = books[0];
//   for (const book of books) {
//     if (maxCountPages.pages < book.pages) {
//       maxCountPages = book;
//     }
//   }
//   return maxCountPages.title;
// }
// console.log(findBookWithMostPages(books));
