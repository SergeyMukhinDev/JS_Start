//Объявление переменной
let randomNumber = 0;
//Присвоение произвольного значения в диапазоне от 0 до 1100 и округление до ближайшего целого
randomNumber = Math.random() * (1100 - 0) + 0;
randomNumber = Math.round(randomNumber);
//вывод в консоль результата работы функции, функция принимает значение 1 аргумента
console.log(`${randomNumber} - ${DEFINING_PRIME_NUMBER(randomNumber)}`); 
//Объявление функции с 1 параметром
function DEFINING_PRIME_NUMBER(inputNumber) {

  if ((inputNumber === 1)|| (inputNumber === 0)) {
    let result = 'Not Prime';
    return result;
  }
  else if(inputNumber === 2)  {
    let result = 'Prime';
    return result;
  }
  else if(inputNumber > 1000)  {
    let result = 'Not correct data';
    return result;
  }
  else   {
    for(let i = 2; i < inputNumber; i++)  {
      if(inputNumber % i === 0) {
         let result = 'Not Prime';
    return result;
      }
    }
     let result = 'Prime';
    return result;  
  }
}