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

//////////////////ФУНКЦІЇ///////////////////////////////////////////////////////////////

// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після крапки;

//// через змінні

// let weight = '75,5'; // можуть прийти дані з бекенду де фізично не зможемо змінити на крапку
// let height = '1.58';
// weight = Number(weight.replace(',', '.')); //замінюємо кому на крапку // результат реплейсу (weight.replace) приводимо до числа ----- називається ченінг
// height = Number(height);
// // height = +height; // + також приводить до числа тобто заміняє написання Number лише коли один операнд (бінарний плюс)

// // const bmi = weight / Math.pow(height, 2);
// const bmi = Number((weight / height ** 2).toFixed(1)); // піднесення до степеня те саме що і в першому варіанті toFixed - повертає рядок, тобто ще додатково огоратємо в Намбер
// console.log(bmi);

//// через функцію

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(',', '.'));
//   height = Number(height.replace(',', '.')); // оскільки ми не знаємо який саме параметр прийде з комою, ми заміняємо обоє
//   //   return weight / Math.pow(height, 2);
//   return Number((weight / height ** 2).toFixed(1)); // ** - піднесення до степеня // to.Fixed -повернув рядок тому огортаємо в намбер
// }
// console.log(calcBMI('88,3', '1,75')); // number //28.8
// // const bmi = calcBMI('88,3', '1.75');
// // console.log(bmi);

// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

//////приклад раннього повернення

// function min(a, b) {
//   //   if (a < b) {
//   //     return a;
//   //   }
//   //   return b;
//   return a < b ? a : b;
// }
// console.log(min(4, 8));
// console.log(min(3, -1));
// console.log(min(-10, 8));
// console.log(min(5, 5));

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(demensions) {
//   demensions = demensions.split(' ');
//   const first = Number(demensions[0]);
//   const last = Number(demensions[1]);
//   //   console.log(first);
//   //   console.log(last);
//   return first * last;
// }

////////////////////скорочений запис//////////////////

// function getRectArea(demensions) {
//   demensions = demensions.split(' '); // розділили значення і перевели в масив
//   return Number(demensions[0] * Number(demensions[1]));
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('46 11'));
// console.log(getRectArea('8 112'));

// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.
// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 - "Poly" виведе 3 - Ajax.

// function logItems(items) {
//   for (let i = 0, n = 1; i < items.length; i++, n++) {
//     console.log(`${n} - ${items[i]}`);
//   }
// }
// замість змінної  ${n} -- можна написати і + 1 = тобто індекс починається з нуля а порядковий номер з 1, тому ми компенсуємо цю різницю

// logItems(['Mango', 'Poly', 'Alax']);
// logItems(['apple', 'grapes', 'peach', 'banana', 'lemon']); //ця функція нічого не повертає, тому рітерн не обов'язковий

// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

function printContactInfo(names, phones) {
  names = names.split(',');
  phones = phones.split(',');
  for (let i = 0; i < names.length, i < phones.length; i++) {
    console.log(`${names[i]}, ${phones[i]}`);
  }
}
printContactInfo('jacob, william, solomon, artemis', '1111111,2222222,333333,4444444');

// let names = 'Jacob, William, Solomon, Artem';
// let phones = '00000000000, 11111111111,22222222222';

// names = names.split(','); //в умові розділяється по комі
// phones = phones.split(',');
// // за допомогою одного цикла перебирається два масива//
// for (let i = 0; i < names.length, i < phones.length; i++) {
//   console.log(`${names[i]} - ${phones[i]}`); // [i] -- ЛІЧИЛЬНИК ВІН ОБОВЯЗКОВИЙ - показує по черзі // i < names.length, i < phones.length --- подвійна умова на випадок якщо неоднакова кількість імен чи тел //обидві умови тру, якщо хоч одна фолс то цикл припиняється
// }

// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:
// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
