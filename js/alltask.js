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
