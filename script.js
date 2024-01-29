// Завдання 1.

let city = 'Київ';
city = 'Львів';
let address = city;
alert(address)

// Завдання 2.

let n = 4;
let power = 3;
let result = Math.pow(n, power);
console.log('4^3=' + result)

// Завдання 3.

let penAmount = 4;
let pencilAmount = 6;
let penCost = 5.25;
let pencilCost = 3.50;
let sumPen = penAmount * penCost;
let sumPensil = pencilAmount * pencilCost;
let reseiptSum = sumPen + sumPensil;
document.write('чек: 1.ручка: 4*5.25 грн=' + sumPen + ' грн // 2.олівець: 6*3.50 грн=' + sumPensil + ' грн // сума:' + reseiptSum + ' грн ')
