//ЗАНЯТТЯ 2

// && - останнє тру або перше фолс
// || - перше тру або останній фолс

// console.log(null && 'false' && 'Mango'); // null
// console.log(null || 'false' || 'Mango'); // false
// console.log(('false' && 'Mango') || null); // Mango
// console.log(('Mango' && null) || false); // false

/// РОЗГАЛУДЖЕННЯ
//1. if (condition) {
// } else {
// }

// if (4 > 6) {
//   console.log('true'); // може бути лише один иф без елсе коли не потрібно ставити значення коли умова не виконалась, тобто коли потрібно лише тру
// } else {
//   console.log('false'); //false
// }
// const value = 7;

// if (value > 5) {
//   console.log('4>5');
// } else if (value > 6) {
//   console.log('4>6');
// } else if (value > 3) {
//   console.log('4>3');
// } else {
//   console.log('else');
// }

//ПЕРЕВІРКА НА ФОЛСИ ЗНАЧЕННЯ (ВіДІБРАТИ ПУСТИЙ РЯДОК, ПЕРЕВІРИТИ ЧИ В МАСИВІ НЕМАЄ ЕЛЕМЕНТІВ )

// const value = '';
// if (value) {
//   //NaN => false тобто на місце value ставє false и в 'if' ми не потрапляємо тобто будь яке фолси значення перестрибує 'if'
//   console.log('if');
// } else {
//   console.log('else');
// }

// 2. condition ? example 1(true) : example 2(false) --- тернарний вираз має лише два випадка тру и фолс

// const result = 5 > 6 ? 'max' : 'min';
// console.log(result); //min

// let result;
// if (5 > 6) {
//   result = 'true';
// } else {
//   result = 'false';
// }
// console.log(result);

// 3. switch () { -- працює набагато швидше ніж тернарний та иф// при зчитуванні браузером відразу виділяється тру у свича // свич використ ЛИШЕ з рядками та числами // не виконуємо ніякі  математичні підрахунки чи порівняння// свіч порівнює із своїм значення кожен кейс
//     case: 1
//     case: 2
// }

// const value = 5;
// if (value === 1) {
//   console.log('one');
// } else if (value === 2) {
//   console.log('two');
// } else if (value === 5) {
//   console.log('five');
// } else {
//   console.log('default');
// }

// у свічі лише строге === порівняння // без брейка виконаються всі кейси one two five // іноді використовують для додавання віку та імені
// const b = 'age';
// switch (b) {
//   case 'age':
//     console.log('one');
//   case 'name':
//     console.log('two');
//     break;
//   case 'five':
//     console.log('zero');
//     break;
//   default:
//     console.log('user');
// }

// function getPrice(type) {
//   let prices;
//   switch (type) {
//     case 'base':
//       prices = 0;
//       break;
//     case 'middle':
//       prices = 20;
//       break;
//     case 'extra':
//       prices = 50;
//       break;
//     default:
//       prices = null;
//       break;
//   }
//   return prices;
// }
// console.log(getPrice('base')); //0
// console.log(getPrice('extra')); //50
// console.log(getPrice('middle')); //20

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (
//     password // парамет
//   ) {
//     case null: //умова якщо пароль не введено то ,,,
//       message = 'Canceled by user';
//       break;
//     case ADMIN_PASSWORD: //У кейсах ви маєте перелічити можливі значення password, з якими хочете порівняти.
//       message = 'Welcome';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//       break;
//   }

//   return message;
// }
// console.log(checkPassword('jqwer')); // wrong password

////////////////////////////////////////ОБЛАСТІ ВИДИМОСТІ//////////////////////////////////////

// 1. Глобальна --- поза межами блоку {} повність весь файл ДЖС (до неї можна достукатися лише вгору) ______з середини назовні________ лише //змінна var може читатися поза межею видимості if {} y function {} вона уже не читається // var - був схожий до лет але він піднімається до верху(хостинг функцій) тобто його можна оголосити після {} і він працював

// const a = 15;
// if (true) {
//   console.log(a); // 15
// }
// if (true) {
//   const b = 22;
// }
// console.log(b); ///EROR

// 2. Блочна -- const let (JS 6) блочна область видимості має фігурні дужки --- {} if

// 3. Функціональна = function  (тобто це видимість у функції)

// let a = 15;
// if (true) {
//   // при тру справджується іф
//   a = 25;
// }
// console.log(a); //25 в прооритеті та змінна що оголошена в дужках / остання// перевизначаеться змінна

// let b = 15;
// if (true) {
//   let b = 1; // доступна лише в иф
//   b = 25; // 15 бо консоль лог не бачить змінну оголошену в {} бо вона стоїть за межами ИФ
// }
// console.log(b);

// let a = 15; // в різних областях видимості можемо створювати однакові змінні
// if (true) {
//   a = 25;
//   let a = 1;
// }
// console.log(a); // EROR бо ми звертаємося до змінної перед її ініціалізацією аби спочатку було лет а потім а, все було б вірно// коли вибиває помилку в ДЖС то припиняєтться зчитування коду

// let a = 10; // глобальна
// if (true) {
//   let a = 15; // блочна змінна
//   if (true) {
//     a = 25;
//   }
// }
// console.log(a); // 10 бо консоль не бачить змінну всередені ІФ ____З СЕРЕДИНИ НА ЗОВНІ Є ШЛЯХ, З ЗОВНІ В СЕРЕДИНУ НЕМАЄ ШЛЯХУ

// let a = 10; // глобальна
// if (true) {
//   let a = 15; // блочна змінна
//   if (true) {
//     a = 25;
//   }
//   console.log(a); // 25 в пріоритеті шукаємо в останьому ИФ змінну потім 15 перевизначаємо на 25
// }

// let a = 10; // глобальна
// if (true) {
//   a = 15; // блочна змінна
//   if (true) {
//     a = 25;
//   }
// }
// console.log(a); // 25 йдемо на гору і перевизначаємо кожну змінну

// let a = 15;
// if (true) {
//   a = 15;
//   if (true) {
//     let a = 25;
//   }
// }
// console.log(a); // 15 оскільки консоль не бачить змінну ЛЕТ в ИФ и виводиться глобальна змінна

// let b = 25;
// if (true) {
//   let a = 15;
//   b = 44;
//   if (true) {
//     a = 25;
//     b = 31;
//   }
//   a = 44;
//   console.log(b); //31 спочатку 44 перевизначаємо замість 25 тобто ЛЕТ б = 44 потім спускаємося нижче и знаходимо  31 перевизначаємо замість 44 и буде 31
// }
// console.log(a); // eror бо не можемо зайти в середину

//////////////////////////////////////////////////////////ЦИКЛИ////////////////////////////////////////////////////////////////////
