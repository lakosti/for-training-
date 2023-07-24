////////////////////////МАСИВИ ТА ФУНКЦІЇ//////////////////////////////////////////

//ЗАДАЧА 1 СТВОРЕННЯ МАСИВУ / ДОДАВАННЯ ЕЛЕМЕНТІВ ДО НЬОГО / ВИВІД У КОНСОЛЬ ПЕРШИЙ ТА ОСТАННІЙ ЕЛЕМЕНТ МАСИВУ

// const genres = ['Jazz', 'Blues'];
// console.log(genres);
// genres.push('Rok-N-Roll'); //додали в кінець елемент
// console.log(genres);

// const first = genres[0]; //вивели перший елемент
// console.log(first);

// const last = genres[genres.length - 1]; // виведе в консоль останній елемент
// console.log(last);

// console.log(genres.shift()); // вивід видаленого масива
// console.log(genres); // сам масив

// genres.unshift('Country', 'Reggabe'); // додали спочатку масива 2 об'єкта
// console.log(genres);

/////перепис на слайс

// const genes = ['Jazz', 'Blues'];
// genes.splice(genes.length, 0, 'Rok-N-Roll');
// console.log(genes.splice(0, 1, 'Country', 'Reggabe')); // видалили джас і помістили нові значення
// console.log(genes);

//ЗАДАЧА 2 скрипт для обчислення площі прямокутника зі сторонами, Значення розділені пробілом

// const value = '8 11'; // є сталі дані які потрібно винести з рядка у число// З РЯДКА В МАСИВ
// const arr = value.split(' '); // перетворюємо дані з рядка в масив і вказуємо по чому розділяємо - по пробілу ' '
// console.log(arr); // [8, 11]
// const first = Number(arr[0]); // примусово переводимо до намбера
// // console.log(typeof first); // number
// const last = Number(arr[arr.length - 1]);
// const result = first * last;
// console.log(result);
// // множимо між собою два рядки // це поганий приклад
// // const result = arr[0] * arr[1];
// // console.log(result);

////ЗАДАЧА 3 ПЕРЕБІР МАСИВУ / ПЕРЕБРАТИ МАСИВ цикл for. Виведи в консоль для кожного елемента рядок у форматі номер_елемента: значення_елемента, Нумерація елементів повинна починатися з 1

// EXAMPLE 1

// const fruits = ['apple', 'grapes', 'peach', 'banana', 'lemon'];
//for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1} - ${fruits[i]}`); // i+1 -- додаємо 1 щоб лічильниик номерувався з 1 і далі +1  і виводимо лічильник
// }
// //i - лічильник, індекс починається з нуля; умова - поки і менше длинни масива поки умова буде тру і буде виконуватися пост вираз на кожній ітерації +1

// EXAMPLE 2

// const fruits = ['apple', 'grapes', 'peach', 'banana', 'lemon'];
// for (let i = 0, n = 1; i < fruits.length; i++, n++) {
//   console.log(`${n} - ${fruits[i]}`);
// }
//n - number = 1 -- означає що числа починаються від 1 і на кожній ітерації додається +1

///ЗАДАЧА 4 ВИВОДИТЬ У КОНСОЛЬ (масиви + цикли)  зробити співвідношення імя та телефонний номер користувача

// let names = 'Jacob, William, Solomon, Artem';
// let phones = '00000000000, 11111111111,22222222222';

// names = names.split(','); //в умові розділяється по комі
// phones = phones.split(',');
// // за допомогою одного цикла перебирається два масива//
// for (let i = 0; i < names.length, i < phones.length; i++) {
//   console.log(`${names[i]} - ${phones[i]}`); // [i] -- ЛІЧИЛЬНИК ВІН ОБОВЯЗКОВИЙ - показує по черзі // i < names.length, i < phones.length --- подвійна умова на випадок якщо неоднакова кількість імен чи тел //обидві умови тру, якщо хоч одна фолс то цикл припиняється
// }

///ЗАДАЧА 5  Виводить у консоль усі слова рядка крім першого і останнього, Повернути рядок який не повиннен закінчуваттися і починатися пробілом.

// const string = 'Welcome to my amazing room in future';
// const arr = string.split(' '); //перетворюємо на масив і потім використовуємо методи масиву
// arr.pop();
// arr.shift();
// const result = arr.join(' '); // повертаємо рядок  та з'єднуємо його
// console.log(result);

////скорочений запис////
// const string = 'Welcome to my amazing room in future';
// const result = string.split(' ').slice(1, -1).join(' '); //slice - вирізали все з 1 і до останнього -1
// console.log(result);

//ЗАДАЧА 6 //МАСИВВИ ТА РЯДКИ Скрипт який розгортає рядок (звортній порядок букв) і виводить його в консоль

// const string = 'Welcome to the future';
// const arr = string.split(''); //щоб застовувати метод реверс потрібно привести до масиву
// const result = arr.reverse().join('');
// console.log(result);

//СКОРОЧЕНИЙ ВАРІАНТ
// const string = 'Welcome to the future';
// const result = string.split('').reverse().join('');
// console.log(result);

// ЗАДАЧА 7 Сортування масиву із циклом. Напишіть скрипт сортування масиву в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'java', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i++) {
//   // console.log(langs[i][0]); // i -- достаємо слова 0 -- перша літера
//   // console.log(langs[0] > langs[i]); // дивимось чи перша буква 0 більша ніж поточна і
//   if (langs[0] > langs[i]) {
//     const result = langs.splice(i, 1)[0];
//     langs.unshift(result);
//   }
// }
// console.log(langs);

//ЗАДАЧА 8 пошук найменшого числа в масиві

// const numbers = [2, 17, -132, 94, 1, 23, -14, 37];
// let min = numbers[0]; //перше найменше число нехай 0
// for (const value of numbers) {
//   if (value < min) {
//     min = value;
//   }
// }
// console.log(min);
