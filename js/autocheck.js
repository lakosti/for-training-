// 1. Знижка (автоперевірка мод 1 завдання 24)

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && 50000 > totalSpent) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && 20000 > totalSpent) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// 2. Тернарний оператор (Автоперевірка 1м/25з)

//  function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   return message;
// }
// //////////////////////////////////////////// приклад утворення тернарного оператора

// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!' --- true
//       : 'The order is accepted, our manager will contact you'; --- false/default
//   return message;
// }

// 3.ПЕРЕВІРКА НА ФОЛСИ ЗНАЧЕННЯ (ВіДІБРАТИ ПУСТИЙ РЯДОК, ПЕРЕВІРИТИ ЧИ В МАСИВІ НЕМАЄ ЕЛЕМЕНТІВ )

// const value = 0;
// if (value) {
//   //NaN => false тобто на місце value ставє false и в 'if' ми не потрапляємо тобто будь яке фолси значення перестрибує 'if'
//   console.log('if');
// } else {
//   console.log('else');
// }

// 4. ПЕРЕВІРКА НА ДОВЖИНУ РЯДКА І КІЛЬКІСТЬ СИМВОЛІВ

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength('Polina'));

// 5.
// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// 6.
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// 7.  ОБРІЗАННЯ РЯДКА + '...'

// function formatMessage(message, maxLength) {
//   let result;

//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 10)); //Curabitur ...
// console.log(formatMessage('Curabitur ligula sapien', 15)); //Curabitur ligul...
// console.log(formatMessage('Curabitur ligula sapien', 30)); //Curabitur ligula sapien

// 8. ПЕРЕВЕДЕННЯ СИМВОЛІВ В ОДИН РЕГІСТР
// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'sAmsUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(normalizedToUpperCaseInput);
//// 8.2.
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   return normalizedInput;
// }

// console.log(normalizeInput('TRtreAS')); //trtreas

// 9. Метод рядків includes(substring) перевіряє, чи входить підрядок substring у рядок, повертає буль - true

// const productName = 'Yaroslava Hovenko';
// console.log(productName.includes('z')); //false
// console.log(productName.includes('ko')); //true
//9.1
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));

// 10. ПЕРЕВІРКА НА СПАМ + ПРЕВЕДЕННЯ ДО ОДНОГО РЕГІСТРУ

// function checkForSpam(message) {
//   let result;
//   if (message.toLowerCase().includes('sale')) {
//     result = true;
//   } else if (message.toLowerCase().includes('spam')) {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Trust me, this is not a spAm message'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

///////////////////////////////////////////////////////////////////////////////////АВТОПЕРЕВІРКА 2-Й БЛОК///////////////////////////////////////////////////////////////////////////////////
// 1 ПЕРЕВІРКА ПАРОЛЯ(РАННЄ ПОВЕРНЕННЯ)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam'; // раннє повернення
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// 1.1/////////////////////////

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// //1.2////////////////////////////////////
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }
// // 1.3/////////////////////////////

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   return message;
// }

//2. ДОВЖИНА МАСИВУ

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// console.log(fruits).length; //4 --довжина масиву це кількість його елементів

//ЗАМІНА ЕЛЕМЕНТІВ МАСИВУ

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// fruits[0] = 'plum';
// fruits[3] = 'orange';
// console.log(fruits[3]); //orange

////////////////////////////////////////////////////ПОШУК ПО ІД////////////////////////////////////////

// const fruitId = 3;
// let fruit;
// switch (fruitId) {
//   case 1: // fruitId === 1 порівнює строго значення
//     fruit = 'banana';
//     break;
//   case 2: // fruitId === 2
//     fruit = 'peach';
//     break;
//   case 3: // fruitId === 3
//     fruit = 'coconut';
//     break;
//   case 4: // fruitId === 4
//     fruit = 'orange';
//   default:
//     console.log('Nothing found');
// }
// if (fruit) {
//   // it is true because fruit it`s string
//   console.log(fruit); // щоб не виводилося в консоль додатково андефінед то додали блок ИФ
// }

/////////////////////////////////////МАСИВИ ТА ФУНКЦІЇ АВТОПЕРВІКА 2

//1//

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

//2//

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// function getExtremeElements(array) {
//   if (array.length >= 2) {
//     return [array[0], array[array.length - 1]];
//   } else {
//     // Якщо масив має менше двох елементів, повертаємо сам масив
//     return array;
//   }
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

//3//

////4.Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   const lowerCase = title.toLowerCase();

//   const word = lowerCase.split(' ');

//   const slug = word.join('-');

//   return slug;
// }

// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

//5 Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   const combined = firstArray.concat(secondArray);

//   if (combined.length > maxLength) {
//     return combined.slice(0, maxLength);
//   }

//   return combined;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));

//6 Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
//}

//7.Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

//8 Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//9 Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

//10. Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i); // додавання чисел до масиву
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

/////////////чат гпт//////////////////////

// function createArrayOfNumbers(min, max) {
//   // Перевірка, якщо аргументи min та max не передані, або якщо max менше min
//   if (min === undefined || max === undefined || max < min) {
//     return [];
//   }

//   // Масив для збереження чисел від min до max
//   const numbersArray = [];

//   // Цикл for для додавання чисел до масиву
//   for (let i = min; i <= max; i++) {
//     numbersArray.push(i);
//   }

//   // Повертаємо масив чисел
//   return numbersArray;
// }

//11.
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

// function filterArray(numbers, value) {
//   const arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i]; // ітерація елементів по масиву

//     if (number > value) {
//       arr.push(number); // додає елмент до фільтрованого масива якщо умова тру
//     }
//   }
//   return arr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//12.Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   if (fruits.includes(fruit)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));

//
