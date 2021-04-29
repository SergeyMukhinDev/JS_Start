let x = null //объявляем переменную и присваимваем ей значение
if (typeof(x) === 'number') {//проверяем на соответсвие типу number
  console.log('x -число')}
 else if (typeof(x) === 'string')//проверяем на соответсвие типу string
 {console.log('x - строка')}
  else if (typeof(x) === 'boolean') //проверяем на соответсвие типу boolean
  {console.log('x - логический')}
    else {console.log('Тип x не определен')} 