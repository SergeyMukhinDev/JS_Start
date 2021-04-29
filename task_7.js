//Задан массив
let array = [25, '25', , 25, null, undefined, 26, true];
//Объявляем переменные для каждого типа
let numberEvenElements = 0;
let numberOddElements = 0;
let numberElementsTypeNull = 0;
let numberElementsTypeUndefined = 0;
let numberElementsTypeBoolean = 0;
let numberElementsTypeString = 0;
//Цикл проверки соответсвия значения типу
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {numberEvenElements++}
    else {numberOddElements++;}
  if (array[i] === null) {numberElementsTypeNull++}
      else if (array[i] === undefined) {numberElementsTypeUndefined++}
         else if ((array[i] === true) || (array[i] === false)) {numberElementsTypeBoolean++;} 
            else if (typeof(array[i]) === 'string') {numberElementsTypeString++;}
}
numberEvenElements = 'Количество четных элементов массива - ' + numberEvenElements;
numberOddElements = 'Количество нечетных элементов массива - ' + numberOddElements;
numberElementsTypeNull = 'Количество элементов массива типа Null - ' + numberElementsTypeNull;
numberElementsTypeUndefined = 'Количество элементов массива типа Undefined - ' + numberElementsTypeUndefined;
numberElementsTypeBoolean = 'Количество элементов массива логического типа - ' + numberElementsTypeBoolean; 
numberElementsTypeString = 'Количество элементов массива строкового типа - ' + numberElementsTypeString;

console.log(numberEvenElements, numberOddElements, numberElementsTypeNull, numberElementsTypeString, numberElementsTypeBoolean, numberElementsTypeUndefined);