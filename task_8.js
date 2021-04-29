//Произвольный массив Map
let associativeArray = new Map([
  ["first", 'first element'],
  [2, 'second element'],
  [3, 3]
]);
//Цикл for of для элементов массива (key и value)
for (let [key, value] of associativeArray) {
    console.log(`ключ : ${key}, значение : ${value}`);
}