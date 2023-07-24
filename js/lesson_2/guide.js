////////////////////////МАСИВИ ТА ФУНКЦІЇ//////////////////////////////////////////

//Масив - складний тип даних який ближче відноситься до об'єкта. ЗБЕРІГАЄ В СОБІ ДАНІ
//[] -- ЛІТЕРАЛ
// Для роботи з масивами використовуються два цикли в основному for / for of
// array.length --- довжина масиву
// array.length -1 --- останній елемент масиву
// break -- перериває цикл
// continue -- вихід із цикла і перехід на наступну ітерацію +=1
// деліметр - той символ чим розділяється рядок(тире, пробіл, посимвольно) // якщо немає такого деліметра як ми вказали у спліт тоді весь рядок буде масивом

/////////////////////////////////МЕТОДИ МАСИВУ/////////////////////////////////////////////////

// .split('') --- перетворює з рядка в масив розбиваючи його роздільником
// .join ('') --- обєднує елементи масиву у рядок
// .revers() --- розвертає/повертає елементи / слова (те що було перше стане останнє і навпаки)
// array.push(6, 7); // дадає в кінці елемент масиву
// console.log(Array.isArray(array)); // true -- перевірка на масив (true or false)
// array.pop(); // видаляє останній елемент масиву
// array.length = 0; // повністью очищує масив
// indexOf -- повертає індекс елемента починаючи з нуля, якщо не знайшов повертає - 1 --- перший неможливий індекс елемент в масиві
// includes -- перевіряє чи є даний елемент в масиві // true / false
// shift -- видаляє елементи на початку масиву
// unsift -- додає елементи на початку масиву
// splice -- додає видаляє заміняє будь який елемент масиву (універсальний)
// slice -- створює копію масиву (рідко викорис) // (з якого, по який(не включно)) тобто //(1, 3)-- видалиться 1 і 2 // slice -вирізати все починаючи з x  і до останнього -1
// concat -- поєднує декілька масивів в один

///////////////ЦИКЛИ для масиву

// for -- якщо потрібно перебрати і замінити якийсь елемент масиву
// for of -- можна швидко без зайвих маніпуляцій перебрати масив але змінити нічого не можна
//while - дуже схожий до фора але самостійно ставити поствираз та лічильник

//             0     1       2     3       4
// const array = [1, 'Hello', null, true, [1, 2, 3]]; // до масива звертаємося по індексу (починається з нуля) розділяється комою /// порядковий номер масиву починається знизу
// //             1      2      3     4       5

// // console.log(typeof array); //object масив це я вид об'єкту
// // console.log(Array.isArray(array)); // true -- перевірка на масив (true or false)

// const first = array[1]; /// --- звернення до масиву
// console.log(first);
// const last = array[array.length - 1]; //останній елемент масиву// -1 тому що індекс на одиницю менший від довжини масиву,тобто порядкового номера
// console.log(last);

//////////цикл For
//let i = 0 -- бо індекс елемента починається з нуля
// i < array.length -- до яких пір буде виконуватися масив(всю його довжину)
// for (let i = 0; i < array.length; i += 1) {
//   // і --- просто лічильний (1,2,3,4)// щоб вивести дані з масива console.log(array[i])
//   const item = array[i]; //переназиваємо масив
//   if (Array.isArray(item)) {
//     for (let j = 0; j < item.length; j++) {
//       // звернення до масива в масиві (J -- прийнято викор. другою змінною)
//       console.log(item[j]);
//     }
//     continue; //перехід на наступну ітерацію
//   }
//   console.log(array[i]);
// }

///////цикл For of -- йому не потрібні ні які ні умови ні ітерації у нього вже все під капотом /// через ФОР ОФ не можна змінити елементи в масиві

// const array = [1, 'Hello', null, true, [1, 2, 3]];

// for (const item of array) {
//   // item -- назва масиву // ліворуч від ОФ - це назва масиву
//   //   console.log(item);
//   if (typeof item === 'string') {
//     item = false;
//   }
// }

/////ЗАМІНА ЕЛЕМЕНТА  В МАСИВІ ЧЕРЕЗ ЦИКЛ for (складні типи даних мутабельні, і їх можна змінювати навіть черз конст)//////////////////

// const array = [1, 'Hello', null, true, [1, 2, 3]];

// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] === 'string') {
//     // якщо елемент в масиві = стрінг тобто рядку (а це наше Хелоу) то в такому разі заміни його на інше значення(фолс)
//     array[i] = false;
//   }
// }
// console.log('for', array); //  [1, false, null, true, [1, 2, 3]];

//////////////////ЧЕРЕЗ while

// const array = [1, 'Hello', null, true, [1, 2, 3]];

// let i = 0; // перший блок ФОР // лічильник починається з нуля
// while (i < array.length) {
//   if (typeof array[i] === 'string') {
//     if (typeof array[i] === 'string') {
//       array[i] = false;
//     }
//   }
//   console.log(array[i]);
//   i++; // пост вираз
// }

/////////////////////////////////////// ПРИСВОЄННЯ ЗА ЗНАЧЕННЯМ І ЗА ПОСИЛАННЯМ

// let value = 1; // примітивні типи даних
// let test = value; // це дві різні змінні

// value += 10;

// console.log('value', value); //11
// console.log('test', test); // 1

////////// за посиланням

// const array = [1, 2, 3, 4, 5];
// const copy = array; // сюди присвоюється посилання тобто масив [] і це вже буде одна змінна

// array.push(6, 7); // дадає елемент масиву
// copy.push(8, 9);
// console.log(array === copy); // true

// console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(copy); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

///////////

// console.log(1 === 1); //true примітивні типи порівнюємо за значенням
// console.log('hello' === 'hello'); // true
// console.log([1, 2, 3] === [1, 2, 3]); // true складні типи порівнюємо за посиланням // створили два різних масиви

//////////////////////////ІМУТАБЕЛЬНІ ТА МУТАБЕЛЬНІ ТИПИ ДАНИХ/////////////////////

// всі примітивні типи даних -- НЕМУТАБЕЛЬНІ і мають присвоєння за значенням // є оператори присвоєння

// let number = 1;
// number += 5; //6
// console.log(number);

// складні типи даних (масив/об'єкт) -- МУТАБЕЛЬНІ і мають присвоєння за посиланням

// let array = [1, 2, 3];
// array = [1, 2, 3, 4]; // переприсвоїли значення
//array = 'string' // перевизначили масив на стрінг
// console.log(array[5]); // undefined --- бо не існує такого елемента  в масиві

// // array.push(4); // а тут мутували значення
// // array.pop(); // видаляє останній елемент масиву // а тут мутували значення
// // array.length = 0; // повністью очищує масив // а тут мутували значення
// console.log(array);

////////////////////////////МЕТОДИ МАСИВУ///////////////////////////////////////////

//  .split('')   --- перетворює з рядка в масив розбиваючи його роздільником
//  .join ('')  --- обєднує елементи масиву у рядок
// .revers() --- розвертає/повертає елементи / слова (те що було перше стане останнє і навпаки)

/////////////Задача 1 Поміняти слова місцями//////////////////
//спочатку ми слова розділюємо потім міняємо містами і потім назад поєднуємо

// const str = 'Hello world';
// const arr = str.split(' '); // 1. розділення посимвольно '' 2. розділеня по пробілу ' ' //() --сюди вказуємо як саме потрібно розділити
// const result = arr.reverse().join(' '); // з'єднуються елементи назад так само як і роз'єднувались
// console.log(result);

//////////////////скорочений варіант запису

// const str = 'Hello world I`m learning JS'; // деліметр - той символ чим розділяється рядок(тире, пробіл, посимвольно)

// const result = str.split(' ').reverse().join(' '); //роз'єднали - перевернули - з'єднали
// console.log(str);
// console.log(result);

//////////////РОЗВОРОТ ПО БУКВАМ/////////////////////////////

// const str = 'Hello'; // деліметр - той символ чим розділяється рядок(тире, пробіл, посимвольно) // якщо немає такого деліметра як ми вказали у спліт тоді весь рядок буде масивом
// const result = str.split('').reverse().join(''); //роз'єднали - перевернули - з'єднали
// console.log(str);
// console.log(result);

////////

// indexOf -- повертає індекс елемента починаючи з нуля, якщо не знайшов повертає - 1 --- перший неможливий індекс елемент в масиві
// includes -- перевіряє чи є даний елемент в масиві // true / false

// const arr = ['hello', 'world'];
// const idx = arr.indexOf('world'); // 1 // повертає індекс елемента hello - 0 world - 1, якщо не знайшов повертає -1 - перший неможливий індекс елемент в масиві
// ///перевірка чи є елемент в масиві////
// if (arr.indexOf('JS') === -1) {
//   console.log('NO');
// } else console.log('YES');
// console.log(idx);

////////////////////// ПЕРЕВІРКА ЧИ Є ЕЛЕМЕНТ В МАСИВІ//////////////////////

// const arr = ['hello', 'world'];

// if (arr.includes('JS')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }
// console.log(arr.includes('JS')); // false

////////////////////////МЕТОДИ ЯКІ МУТУЮТЬ МАСИВ//////////////////

// push -- додає в кінці елемент масиву
// pop -- видаляє останній елемент масиву
// shift -- видаляє елементи на початку масиву
// unsift -- додає елементи на початку масиву
// splice -- додає видаляє заміняє елемент масиву (універсальний)
// slice -- створює копію масиву (рідко викорис)
// concat -- поєднує декілька масивів в один

// const arr = ['hello', 'world'];
// arr.push(1, 45, 14);

// arr.pop(); // видалило 14 // скільки pop прописуємо скільки елементів і видаляє
// arr.pop(); //видалило 45
// // console.log(arr); // хелоу ворд 1

// arr.unshift(1, 'a');
// console.log(arr); // 1 а хелоу ворд 1

// // arr.shift(); //видаляє 1
// // arr.shift(); // видаляє а
// // console.log(arr); // хелоу ворд 1

// const result = arr.slice(1, 3); //створилась нова комірка памяті // (з якого, по який(не включно)) тобто (1,3) -- видалиться 1 і 2 // виводиться те що вирізали
// console.log(result);

// const arr = ['hello', 'world', 'js'];
// // arr.splice(1, 1, 'from'); //(який по індексу, скільки видалити) 'from' - заміна
// // console.log(arr); // тобто 1 елемент видалило і замінило на інший // hello from js

// arr.splice(1, 0, 'from', 'react', 'noda'); // якщо не потрібно видалити а просто додати, то він стане на той індекс що ми вказали йому
// console.log(arr); // hello from react noda world js

////дізнатися по індексу і замінити той елемент

// const arr = ['hello', 'world', 'js'];
// const idx = arr.includes('world'); //1
// const result = arr.splice(idx, 1, 'from'); // hello from js
// console.log(arr);
// console.log(result); //world  отримали те що вирізали

/////////////////////

// const arr = [1, 2, 3];
// const arr1 = [4, 5];
// const arr2 = [6, 7];
// const result = arr.concat(arr2, arr1); //підключаємо у будь якому порядку
// console.log(arr);
// console.log(result);

//////////////////////

// document.body.id = 1;
// console.log(typeof document.body.id); // typeof - string
// console.log(document.body.id === 1); //false

// input = 2;
// console.log(typeof input); // number
// console.log(input === 2); // true

//////////////////////////////////

// const array = ['Aple', 'mine', 'juice', 1, false];
// console.log(array.slice(0, 3)); //'Aple', 'mine', 'juice'//копіює масив

// const array = ['Aple', 'mine', 'juice', 1, false];
// console.log(array.indexOf('mine')); //1 // шукає індекс по назві

// const array = ['Aple', 'mine', 'juice', 1, false];
// console.log(array.splice(0, 0, 'my')); // [] -- дужки пусті бо нічого не видалило лише додали my
// console.log(array);

// const array3 = [0];
// const array = ['Aple', 'mine', 'juice', 1, false];
// const array2 = [8, 2, 'yellow'];
// const result = array.concat(array3, array2);
// console.log(result);

// .split('') --- перетворює з рядка в масив розбиваючи його роздільником
// .join ('') --- обєднує елементи масиву у рядок
// .revers() --- розвертає/повертає елементи / слова (те що було перше стане останнє і навпаки)

// const result = [1, 2, 3, 4, 5];
// const result = array.split(' ');
// console.log(array);

// let array = ['Hello', 'world'];
// array = array.join(' ');
// console.log(array);

//повертає декілька елементи з масива

// function getExtremeElements(array) {
//   if (array.length >= 2) {
//     return [array[0], array[array.length - 1]];
//   } else {
//     return array;
//   }
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5])); //1, 5
