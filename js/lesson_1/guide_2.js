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

///////////////////////////////////////////////////////////////////////////НАВІЩО RETURN/////////////////////////////////////////////////////

// function add(a, b) {
//   const result = a + b;
//   return result; // 6 / функції потрібно явно вказати що ми хочему повернути
// }
// console.log(add(2, 4)); // undefined

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

// 3. switch () { -- працює набагато швидше ніж тернарний та иф// при зчитуванні браузером відразу виділяється тру у свича // свич використ ЛИШЕ з рядками та числами // не виконуємо ніякі  математичні підрахунки чи порівяння  більше/менше// свіч порівнює із своїм значення кожен кейс
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

// function checPassword(password) {
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

// /////// /////////////////////////////////////////////////////////////////////// СТВОРИТИ СВІТЛОФОР (switch)

// let message = prompt('Enter your color');

// if (message) {
//   message = message.toLowerCase(); // огоротаємо в ИФ для того щоб не було помилок коли користувач нічого не введе в промт // в такому разі йому просто висвітиться be carefull
// } // робимо дані які ввів користувач нижнім регістром

// let action;
// // будемо змінювати екшен в залежності від кольору
// switch (message) {
//   case 'yellow': // якщо це не число то ставимо в лапках ''
//     action = 'ready';
//     break;
//   case 'red':
//     action = 'stop';
//     break;
//   case 'green':
//     action = 'go';
//     break;
//   default:
//     action = 'be careful';
// }

// alert(action); /// виводимо алерт для всіх

// function getShippingCost(country) {
//   let message;
//   let price;
//   switch (country) {
//     case 'China': // те що зрівнюємо те сюди і пишемо
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//       break;
//   }
//   return message;
// }
// console.log(getShippingCost('Australia'));

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

// 1. for() -- перебір якихось елементів або повторення якоїсь операції певну кількість разів for завжди ініціалізується let // // ініціалізація /умова/поствираз(ітерація) пост вираз --- означає що робити після одного виконання цикла(допоки правдива умова буде виконуватися пост вираз))

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// const str = 'hello world'; // ітерабельний елемент (це рядок) - той який можна перебрати звертаючись до якоїсь частинки по індексу (індекс елемента завжди починається з нуля тому і = 0)

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// } // ++ аналог +=1

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]); //зверненя по індексу -- []
// }
// //поки наша і менша довжини рядка (цикл буде працювати від першої букви рядка(0) до кінця довжини рядка .length)

// 2. while -- є лише умова (), поки вона тру, то буде виконуватися цикл // перевірив і зробив
// while (true) {
//   // безкінечне зациклення буде постійно повторюватися тому для цього потрібно брейк або континью
//   console.log('Hello world');
// }
// const str = 'Hello world'; // перебрали рядок і знайшли вірну букву
// let i = 0;
// while (i < str.length) {
//   if (str[i] === 'w') {
//     console.log('yes');
//     break; // повністью перериває цикл// знайшли те що шукали и перервали цикл
//   }
//   console.log('no', str[i]);
//   i += 1;
// }

// 3. do while --- спочатку йде тіло do потім умова while // зробив і перевірив
// const str = 'Hello world';
// let i = 0;
// do {
//   if (str[i] === 'w') {
//     console.log('yes');
//     break;
//   }
//   console.log('no'); //якщо наткнеться на фолс то хоча б один раз відпрацює
//   i += 1;
// } while (i < str.length);

// //for(ініціалізація; умова; пост вираз) пост вираз --- означає що робити після одного виконання цикла(допоки правдива умова буде виконуватися пост вираз))
// let str = 'Hello world'; // оскільки ми точно не знаємо скільки буде символів то просто в умові пишемо що і менше ніж довжина рядка
// for (let i = 1; i < str.length; i++) {
//   console.log(str[i]); // звертаємось до якоїсь літери із строки []
// }

////////////////////////////////////////////////////////////////////////////////////////////////// EXAMPLE//////////////////////////////////////////////////

// 1. ВВЕДЕННЯ ДАНИХ У ВИПАДАЮЧЕ МЕНЮ ПРОМТ ___________________________________________________________________________________________________________________________________________
// const value = prompt('Яка офіційна назва JavaScript?'); // у змінній value зберігається те що вводить користувач
// if (value.toUpperCase() === 'ECMAScript') {
//   alert('Right!');
// } else {
//   alert('Your wrong. Correct answered it`s ESMAScript!');
// }
// console.log(alert);
// console.log(value);

// 2. ВІДОБРАЖЕННЯ ГОДИН ТА ХВИЛИН/ РАЗОМ ГОД+ХВ И ЛИШЕ ГОД

// const hours = 14;
// const minutes = 15; //0 = false 'if' doesn`t work with 'false'
// let timesstring;
// if (minutes) {
//   //(minutes > 0) 0 можна не писати оскільки якщо змінна minutes = 0, то це означає false и при false значення ИФ не працює, тому воно автоматично виведе елс
//   console.log(`На годиннику ${hours} годин ${minutes} хвилин`);
// } else {
//   console.log(`На годиннику ${hours} годин`);
// }

//3 ВИВІД У КОНСОЛЬ ЯКЩО ПРОМТ ЧИСЛО ВІД 0 ТО ЦЕ ПОЗИТИВНЕ ЧИСЛО, МЕНШЕ НУЛЯ НЕГАТИВНЕ ЧИСЛО И ПРОСТО НУЛЬ

// const userInput = Number(prompt('Введіть число')); // promt завжди виводить рядок тому переводимо до числа , бо в іншлму випадку некоректно працює
// console.log(typeof userInput);
// if (!userInput) {
//   //інверсія ! // userInput дає нам нуль, а це фолс if з фолс не працює тому ми його перетворюємо на тру за інверсією щоб вивести 0
//   alert('Це нуль');
// } else if (userInput > 0) {
//   alert('It is a possitive number');
// } else {
//   alert('It is a negative number');
// }

///4. ВИВІД ПАРНОГО/НЕПАРНОГО ЧИСЛА
// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2 === 0) { /// не потрібно так робити краще через інверсію (!(userInput % 2))
//   /// ВИЗНАЧЕННЯ ПАРНОГО ЧИСЛА % 2 === 0 ______________ЗАЛИШОК ВІД ДІЛЕННЯ 0 / 0 тобто нуль це парне число
//   console.log('Парне');
// } else {
//   console.log('Не парне');
// }

/////////4.1

// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2) {
//   console.log('Не парне');
// } else {
//   console.log('Парне');
// }

/////////////////////////////////////////////////ТЕРНАРНИЙ ОПЕРАТОР в консолі + ПЕРЕБІР ПАРНЕ/НЕПАРНЕ///////////////////////////////

// const userInput = Number(prompt('Введіть число'));
// console.log(userInput % 2 ? 'Не парне' : 'Парне'); ////ТЕРНАРНИЙ В КОНСОЛІ

////////////////////////ІНВЕРСІЯ часто використ///////////////////// якщо якесь значення === 0 в ИФ то ми робимо інверсію і пишемо !0
// if (0) {
//   //-- false
// } else {
//   console.log('zero'); // якщо потрібно відловити нуль, ми не можемо писати в елс, бо це некоретно, потрібно писати в ИФ але ИФ не працбє з фолс а 0 = фолс, тобто в такому випадку використовуємо інверсію
// }
// //////////////////////////
// if (!0) {
//   console.log('zero'); //// ПРАВИЛЬНИЙ ВАРІАНТ З ІНВЕРСІЄЮ
// }

//5. ПОРІВНЯННЯ ЧИСЕЛ У ЗМІННИХ якщо а та б більше ніж сто то вивести максимальне із них, якщо менше то б + 512

// const a = 10;
// const b = 180;
// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a); // false 120 > 180
//   } else {
//     console.log(b); // b true
//   }
// } else {
//   console.log(b + 512);
// }

// ТЕРНАНИЙ ПЕРЕПИС

// const a = 250;
// const b = 180;
// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b); // порівнює яке число більше і виводить більше число
// } else {
//   console.log(b + 512);
// }

//5. ФОРМАТУВАННЯ ПОСИЛАННЯ endsWith() -- перевіряє остан символ// startWith -- початок  // перевірьте чи закінчується посилання символом / якщо ні то додайте
// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//   // якщо змінна лінк не закінчується на / то додай використали інверсію, бо в інакшому випадку ИФ був би пустий а в ЕЛС писали умову
//   link += '/'; //конкатенація додавання /
// }
// console.log(link);

//6. ПЕРЕВІРЯЄМО ЧИ ЗАКІНЧУЄТЬСЯ ЗНАЧЕННЯ ЗМІННОЇ ТАКИМ СЛОВОМ

// let link = 'https://somesite.com/about';
// if (!link.endsWith('/') && link.includes('my-sites')) {
//   // '/' не дадається тому що me-sites не міститься в рядку, а && -- вимагає два тру і ИФ працює лише з тру
//   link += '/';
// }
// console.log(link);

// //6. ТЕРНАНИЙ ПЕРЕПИС
// let link = 'https://somesite.com/about';
// console.log(!link.endsWith('/') && link.includes('my-sites') ? (link += '/') : link);

/// 7. ПЕРЕБІР ГОДИН І ВИВІД НА ЕКРАН ПЕВНОГО ЗНАЧЕННЯ (ДЕНЬ/НІЧ)
// const hours = 10;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   //порівнюємо проміжок годин через оператор И
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// 9. ДЕДЛАЙН ЗДАЧІ ПРОЕКТУ якщо до дедлайну 0 днів то виведи сьогодні якщо 1 день то виведи завтра якщо до дедлайну 2 дні після завтра ....
// const daysUntilDeadline = 0;
// if (!daysUntilDeadline) {
//   // якщо до нас приходить нуль опрацювуємо інверсію
//   console.log('today');
// } else if (daysUntilDeadline === 1) {
//   console.log('tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('the day before tomorrow');
// } else {
//   console.log(`${daysUntilDeadline} days`);
// }

//////////////РОБИМО РЕФАКТОРИНГ КОДУ ЗА  ДОПОМОГОЮ SWITCH/////////////////////

// const daysUntilDeadline = -1;

// if (daysUntilDeadline >= 0) {
//   // якщо значення додатнє або нуль (тобто ще залишився час до дедлайну) то виконується ИФ
//   switch (
//     daysUntilDeadline //світч зручний щоб case порівнювати зі змінною /// у самому свічі ми не можемо використати порівняння тому огоратємо його в ИФ
//   ) {
//     case 0:
//       console.log('today');
//       break;
//     case 1:
//       console.log('tomorrow');
//       break;
//     case 2:
//       console.log('the day before tomorrow');
//       break;
//     default:
//       console.log(`${daysUntilDeadline} days`);
//   }
// } else {
//   console.log('Друже ти проспав'); // якщо значення відємне виконуєється ЕЛС тобто просрочений дедлайн
// }

// 11. ЦИКЛ for (необхідно вивести у консоль числа від min - max але тільки якщо число кратне 5)

// const max = 100;
// const min = 20;
// for (let i = min; i >= min && i <= max; i += 1) {
//   // і += 1 а не 5 тому що може бути не парне число, тобто 19, тому краще прописувати +1 /// лічильник і = min / і = 0 тобто пишемо те число з якого починається цикл /// i >= min && i <= max -- подвійна умова
//   if (!(i % 5)) {
//     // кратне 5 тобто ділиться на 5 (залишок від ділення на 5 буде нуль, а при нулі повертається ФОЛС и ИФ не працює, тому застосовуємо інверсію)
//     console.log(i);
//   }
// }

//12  СТВОРИТИ СКРИПТ ЯКИЙ ПИТАТИМЕ ЛОГІН ЧЕРЕЗ ПРОМТ ТА ВИВОДИТИМЕ РЕЗУЛЬТАТ В КОНСОЛЬ

// const login = prompt('Тут має бути логін');
// if (!login) {
//   // просто логин нам виводить НАЛ тобто одне из фолси значень в такому випадку ми застосовуємо інверсію !логин щоб вивело нам тру тобто НЕ НАЛ = НЕ ЛОГІН
//   console.log('Скасовано');
// } else if (login === 'Адмін') {
//   const password = prompt('Тут має бути пароль');
//   console.log(password === 'Я адмін' ? 'Hello' : 'Wrong password');
// } else {
//   console.log('Я вас не знаю');
// }

// const str = "М'який";
// console.log(str);

// const str = 'М\'який';
// console.log(str);

/////// ФУНКЦІЯ (застосунок для автоматизації правильних відповідей на дитячі загадки)

// function hello() {
//   console.log('hello');
// }
// hello(); /// hello єтап використання функції її вивід на екран
// hello(); // hello
//////////////////////////////////////////////////////////////////////////////////////
// function printMessage(message) {
//   // (message) -- це як змінна через лет// якісь дані передають через цей параметр
//   console.log(message);
// }
// printMessage('Привіт'); // це значення полетить у меседж
// printMessage('Мене звати');
// printMessage('Ярослава!!!');
// printMessage('А тебе?');

///////////////////////////////////

// function sayHello(message, name) {
//   console.log(`${name}, ${message}`);
// }
// sayHello('Hello', 'Alex'); //// якщо два пареметри то передаємо по черзі

/////ЗАДАЧА загадка та відповідь///////

// function check(text, answer) {
//   // в консоль виводимо два аргементи які звіряються текст вводимо ми відповідь користувач ми співставляємо щоб все було вірно
//   let message = prompt(text); //якщо потрібно внести/вивести якісь дані використовуємо меседж

//   if (message) {
//     message = message.toLowerCase();
//     // якщо юзер написне cancel або введе у верхньому регістрі
//   }
//   if (answer === message) {
//     alert('Correct');
//   } else {
//     alert('You are wrong. Try again');
//   }

//   return answer === message; // повернення значення із функції
// }
// console.log(check('Хоч не літак, а крилатий. Без крил не може працювати', 'вітряк'));
// console.log(check('Через воду він проходить, а сам з місця він не сходить', 'міст'));

// Задача 3 Скільки голосних літер у реченні

// function countVowel(str) {
//   const vowels = 'aeiou';
// }
// console.log(countVowel('HELLO WORLD')); //3
// console.log(countVowel('Junior Web Developer')); //8
