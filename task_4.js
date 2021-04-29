//задаем в переменные диапазон значений
let min = 0;
let max = 100;
//получаем случайное число из указанного диапазона при помощи math.random
resultRandom = Math.random() * (max - min) + min;
//округляем полученное чило до ближайщего целого math.round
resultRandom = Math.round(resultRandom);
//выводим результат
console.log(resultRandom);