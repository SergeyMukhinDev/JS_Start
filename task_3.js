let str = 'JavaScrypt';// дана строка
reverse = str.split("").reverse().join('');//делим строку на отдельные элементы методом split
                                           //применяем к полченному метод reverse для обращения порядка следования элементов
                                           //удаляем разделитель элементов "," методом join
console.log(reverse);// выводим результат 