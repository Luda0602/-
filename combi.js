//Велосипедист починає маршрут з висоти 0 метрів.
//Є масив gain, у якому кожне число показує, наскільки змінилася висота після переходу
// до наступної точки.
//додатне число — піднявся вгору;
//від'ємне число — спустився вниз./*
// var largestAltitude = function (gain) {
//   let currentAltitude = 0;
//   let maxAltitude = 0;

//   for (const height of gain) {
//     currentAltitude += height;

//     if (currentAltitude > maxAltitude) {
//       maxAltitude = currentAltitude;
//     }
//   }

//   return maxAltitude;
// };

// console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
// console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
