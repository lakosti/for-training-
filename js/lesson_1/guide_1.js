// ЗАНЯТТЯ 1  ВСТУП---------------------------------------------------------------------------------------------------------
//////////////-----------------------------------------МЕТОДИ ДЛЯ РОБОТИ З РЯДКАМИ-------------------------------------------

// !!~courses.indexOf(course) ---- перевірка чи є цей елемент в переліку чи ні/// таке саме як courses.includes(course)
// ~ -- називається бітвайс нот // bitwise not
// console.log(!!~1);

// const str = 'Hello world';
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.indexOf(' ')); //5 бо пробіл на пятому індексі
// console.log(str.indexOf('H')); //0
// console.log(str.includes('world')); // true  // перевіряє чи є така частина строки
// console.log(str.endsWith(' world')); // true  "Чи цей рядок закінчується на ..."
// console.log(str.startsWith('h')); //false  "Чи цей рядок починається на ..."
// console.log(str.replace('H', 'h')); // hello
// console.log(str.replaceAll('o', 'O')); // HellO wOrld // замінює всі букви
// console.log(str.slice(0, str.length - 1)); // Hello worl // повертає якусь частину рядка від 0 тобто від початку і ленгс це всю довжину окрім останньої літери
// console.log(str.slice(0, 3)); // Hel

/// .padStart()  --- може доставити ті символи які потрібні '1'.padStart(2, '0') 2 -- довжина рядка, 0 - це число яке потрібно доставити // доставляє 0 на початок // == 01 // додати нуль в часах
// .padEnd() --- '1'.padEnd(2, '0') === 10
//  toString() -- привведення до рядка
//  return `${hours.toString()} : ${minutes}`; // приведення до рядка
// використання .padStart() --- після приведення до рядка використовуємо метод ---  return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}`; // приведення до рядка

// ////////////////// Cкорочені записи ///////////////////////
// Boolean
// console.log(Boolean(-1)); - false
// console.log(!!-1); - false

// Number
// height = Number(height);
// height = +height;

//Math.pow -- піднесення до степеня
// Math.pow(number, степінь)
//number ** степінь

// stydents++ ---- інкремент аналог  += //працює з for//  додає 1
// stydents--  декремент те саме що і інкремент але з мінусом -= //працює з for// віднімає 1

///////////////////////////////////////////////////////////////// ЛОГІЧНІ ОПЕРАТОРИ

// && ---- оператор вимагає з права і з ліва тру значення, якщо буде фолс то поверне його значення ----ПОВЕРТАЄ ПЕРШИЙ ФОЛС АБО ОСТАННІЙ ТРУ (працює на 6 значень які повертають фолс)
// || ---  повертає перше true або останній false (працює на 6 значень які повертають фолс)
// ?? ---- оператор нульового злиття ??  працює на 2 значення null undefined

// /////////////////////////////////////FALTHY ЗНАЧЕННЯ ------------

// 0 --- false
// null --- false
// underfined --- false
// false --- false
// NaN ---- false
// "" --- false (empty string) якщо є пробіл ' ' то це вже тру
// false --- false
//console.log(Boolean(-1)); ===> console.log(!!-1); --- аналог буліна !! //result true

// на практиці використовуємо лише строге === порівняння
// console.log(3 === '3');  трійка рядком не переводиться у число, при порівнянні буде ----false----
// console.log(3 == '3'); трійка рядком переводиться у число, при порівнянні буде ----true----

// при порівнянні mango.indexOf(nam) буде -1, тому що відбуваться порівняння і в такому рядці немає такого підрядка

//ЯКЩО ПЕРЕТВОРЮЄМО В NUMBER то не повинно бути крім чисел ніяких букв, інакше буде NaN
//console.log(Number('25.8cm')); // result NaN

// Примітивні типи даних - імутабельні типи даних( не можна мутувати, тобто не можна змінити значення змінної, до поки не перевизначите її +-=/)----------- Мутабельні типи даних - це об'єкти
// Number
// string
// Boolean
// undefiner
// null

//let a = 10;
//a = a + 2; // = це оператор присвоєння
// console.log(a); //12
// a -= 5; //7
// console.log(a);

// console.log(number); // indefined лише вар конст и лет будуть видавати ерор
// var number = 10
// console.log(number); // 10

// ------------------------------------------------------------------------------- ПРИКЛАДИ -----------------------------------------------------------------------
// 1. МАТЕМАТИЧНІ ОПЕРАТОРИ (СУМА/МІНУС)

// const apples = 47;
// const grapes = 156;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// 2. КОМБІНОВАНІ ОПЕРАТОРИ

// let stydents = 100;
// stydents = stydents + 50; //150
// stydents += 50; //150+50 = 200
// console.log(stydents);

//-----------------------------------------------ІНКРЕМЕНТИ ТА ДЕКРАМЕНТИ-----------------------------------------------

// let stydents = 5;
// stydents += 1; //6
// stydents++ ---- інкремент аналог верхнього += працює з for

// let stydents = 5;
// stydents -= 1; //4
// stydents--; // декремент те саме що і інкремент але з мінусом працює з for

//for(ініціалізація; умова; пост вираз) пост вираз --- означає що робити після одного виконання цикла(допоки правдива умова буде виконуватися пост вираз))
// let str = 'Hello world'; // оскільки ми точно не знаємо скільки буде символів то просто в умові пишемо що і менше ніж довжина рядка
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]); // звертаємось до якоїсь літери із строки за індексом []
// }

// 3. КЛАС MATH

// ceil - заокруглює в гору
// const value = 27.1; // 28
// console.log(Math.ceil(value));

// floor -- round to bottom
// const value = 42.6; // 42
// console.log(Math.floor(value));

// round -- just round
// const value = 28.5; //29
// console.log(Math.round(value));

// Number('25.7px'); // NaN
// Number.parseInt('25.7px'); // 25
// Number.parseFloat('25.7px'); //25.7

// const str = '153.35tr';
// console.log(Number.parseInt(str)); //153

// const str = '256.88tt';
// const num = Number(str);
// console.log(num); // NaN метод намбер очікує на число, якщо було б '25' то намбер перевів би рядок в число 25
// console.log(Number.parseInt(str)); // 256 у такому випадку Number.parseInt виводить по можливості ЦІЛЕ число
// console.log(isNaN(num)); // глобальний метод виконує приведення типів під капотом/ уже застарілий
// console.log(Number.isNaN(num)); // метод класу намбер ВИКОРИСТОВУЄТЬСЯ В ОСНОВНОМУ ЦЕЙ МЕТОД, бо перший працює не зовсім коректно

// console.log(isNaN(undefined)); // true відбувається приведення типів 'ЦЕ НЕ ЧИСЛО?' --  TRUE
// console.log(Number.isNaN(undefined)); // false не відбувається приведення типів

//
// const num = '25.655dfp';
// console.log(typeof num); // string
// console.log(Number.isNaN(num)); //false
// console.log(isNaN(num)); //true

// const mango = 'mango';
// console.log(mango.indexOf('nam')); // -1 -- немає такого значення
// console.log(mango.indexOf('m')); // 0
// console.log(mango.indexOf('a')); // 1
// console.log(mango.indexOf('n')); // 2
// console.log(mango.indexOf('0')); // 4

// alert('hi');

// const message = prompt('Message');
// console.log(message); //null

// const result = confirm('Are you happy?');
// console.log(result); // false/true
// -------------------------------------------------------------------------------------КОНКАТЕНАЦІЯ (ЛИШЕ + )-----------------------------------------------------

// const name = 'Artem';
// const age = 28;

// const result = name + ' years ' + age; //Artem years 28 '  ' <- space
// console.log(result);

// console.log(5 + Number('wertty')); // NaN

// const num = 5;
// const price = '10'; // '10' перетворює '1' також на рядок(string) бо рядок є домінуючим типом ЛИШЕ при ДОДАВАННІ
// const summa = 1;
// const result = num + price + summa;
// console.log(result); // 5101
// console.log(typeof result); // string

// const a = 10 * '10'; // 100
// console.log(a);
// console.log(typeof a); // number  -- тут буде намбер домінуючим типом даних

// const c = 10 / '5'; //2
// console.log(c);
// console.log(typeof c);

//const value = 10;
//const value_2 = '5';
//const result = value - Number(value_2); // перетворюємо рядок на єдиний тип даних Намбер для математичних операцій
//console.log(result);

// let a = 6;
// let b = false;
// let c = '12';
// let d = 1;
// let result = a + d + c + b;
// console.log(result); //712false

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock'; // спочатку () визначили дію додавання 150+50 = 200
//const message = `${companyName} has ${repairBots + defenceBots} bots in stock`; // щоб додати змінні в шаблонному рядку - об'єднуємо їх
// console.log(message);

// 2. ---------------------------------------------------------------------------Оператори порівняння. Які будуть вирази.------------------------------------------------

// console.log(5 > 4); //true

// console.log(!!~1); //true

// console.log(!!~-1); //false

// console.log(~0); //-1

// console.log(~-2); //1

// console.log(~2); //-3

// const arr = ['a', 'b', 'c'];
// const idx = arr.indexOf('a');

// console.log(!!-(idx + 1)); //true
// console.log(!!~idx);//true
// console.log(Boolean(~idx));//true

//    - (x + 1);

// console.log(10 >= '7'); //true відбувається приведення типів і порівнюється як звичайні символи

// console.log('2' > '12'); //true порівнюється посимвольно тобто 2 > 1(2) / порівнюєтся по юнікоду 2 - 32 , 1 - 31

// console.log('2' < '12'); //false

// console.log('2' < '2'); //false

// console.log('2' <= '2'); //true

// console.log('4' == 4); //true

// console.log('6' === 6); //false

// console.log(false === 'false'); //false

// console.log('a' < 'aAbBc'); // true перевага віддається тій строці яка більша

// console.log('false' == 0); // false оскільки фолс стокою = тру = 1

// console.log('0' == false); //true

// console.log(26 >= 26); //true оскільки спрацювує два оператора = і >

// console.log('1' != 1); //false  оскільки 1  = 1

// console.log('1' !== 1); // true оскільки 1 не дорівн 1

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true (P - 50, p - 70) --- отже якщо рядоки то порівнюємо по юнікоду //// 'p'.charCodeAt(0) --- в браузері в консолі порівнюємо

// console.log('Papaya' === 'papaya'); //false

// console.log('papaya' < 'papaua'); // false --- y - 79, u - 75

// console.log(undefined == null); //true

// console.log(undefined === null); //false

//--------------------------------------------------------------------------------------ЛОГІЧНІ ОПЕРАТОРИ----------------------------------------------------

// && оператор і ---- вимагає з права і з ліва тру значення, якщо буде фолс то поверне його значення

// console.log(true && 3); //3 _________ПОВЕРТАЄ ПЕРШИЙ ФОЛС АБО ОСТАННІЙ ТРУ
// //true = true 3 = true

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); // kiwi  4 --- це тру значення, оскільки фолс це -- лише нуль, фолс, нал, индефінед, пустий рядок, нот е намбер

// console.log(true && 0 && 'kiwi'); // 0 бо це перше фолсі значення

// || --- повертає перше значення true або останній false ______________ПЕРШИЙ ТРУ АБО ОСТАННІЙ ФОЛС

// console.log(true || 3); //true

// console.log(3 || true || 4); //3 якщо знайшло перший тру то далі не перевіряється

// console.log('rgrg' || false || 7); // 'rgrg' --- перше тру

// console.log(null || 2 || undefined); //2 --- перше тру

// console.log((1 && null && 2) > 0); //false оператор і працює до першого фолса тобто нал=0 і 0 не більше нуля

// console.log(null || (2 && 3) || 4); // 3

// console.log(2 || 0 || 1); // 2 метод короткого замикання якщо знаходить відповідь то далі не рухається

// console.log(0 ?? 1); //0 те що перше бачит і повертає

// console.log(5 ?? 10); //5

// console.log(null ?? 1); // 1  повертає значення правого операнда якщо лівий це null / undefined

// console.log(null ?? undefined); // undefined

// console.log(undefined ?? 10); // 10

// console.log('' || false || 7); // 7 перше істинне

// console.log(null || 2 || undefined); // 2 перше істинне далі не дивиться

// console.log('' ?? 4); // ''

// --------------------------------ОБЛАСТІ ВИДИМОСТІ-----------------------------------------------------

// let message = 'hello';// HELLO //  глобальну область видно у ИФ
// if (true) {
//   message = 'Hola'; //HELLO
//   if (true) {
//     message = 'HELLO'; // піднімається в гору і намагається знайти змінну і переоприділити значення
//   }
// }
// console.log(message); // HELLO
// ------------------------------------------------------------------------------------------ЗАДАЧИ--------------------------------------------------------

// 1. Розрахувати iндекс маси тіла, необхідно вагу в кг розділити на квадрат висоти людини у метрах. Індекс маси тіла необхідно округлити до однієї цифри після коми

// let weight = '75,5'; // можуть прийти дані з бекенду де фізично не зможемо змінити на крапку
// let height = '1.58';
// weight = Number(weight.replace(',', '.')); //замінюємо кому на крапку // результат реплейсу (weight.replace) приводимо до числа ----- називається ченінг
// height = Number(height);
// // height = +height; // + також приводить до числа тобто заміняє написання Number лише коли один операнд (бінарний плюс)

// // const bmi = weight / Math.pow(height, 2);
// const bmi = Number((weight / height ** 2).toFixed(1)); // піднесення до степеня те саме що і в першому варіанті toFixed - повертає рядок, тобто ще додатково огоратємо в Намбер
// console.log(bmi);

//. 2. оператор нульового злиття ?? або дефолтне значення

// ||  працює на 6 значень які повертають фолс
// ??  працює на 6 значень які повертають фолс
// ?? працює на 2 значення null undefined

// const incomingValue = 5;
// const result = incomingValue + Number('a11'); // number - це значення яке ввів користувач (тобто стала змінна додає значення користувача)
// console.log(result);
// const defaultValue = 10;
// const value = result || defaultValue; //в такому випадку якщо користувач введе якесь невірне число, то за допомогою оператора АБО вибереться дефолтне значення, а якщо вірне значення то вибере його
// console.log(value);

// ??

// const incomingValue_2 = 5;
// let test = 0;
// const value_2 = test ?? 'some value'; // оскільки лет змінна не оголошена вона андефайнед, і оператор ?? обирає some value, тобто дані по замовчуванні // коли змінна лет оголошена і значення не нал і андефайнед то обирається числo користувала
// console.log(value_2);

//3. ГОДИНИ ЗАПИСАТИ РАЗОМ З ХВИЛИНАМИ X:X
//70 = 01:10
//450 = 07:30
//1441 = 24:01

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60; // залишиться залишок хвилин, ті що не пішли в години // 1441/60 = години % - це залишок хвилин
// console.log(hours);
// console.log(minutes);
// const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`; // to.string -- так як це число краще використати перетворення на рядок /// щоб у строці була строка
// console.log(result);

/// .padStart()  --- може доставити ті символи які потрібні '1'.padStart(2, '0') 2 -- довжина рядка, 0 - це число яке потрібно доставити // доставляє 0 на початок // == 01
// .padEnd() --- '1'.padEnd(2, '0') === 10

// const number = 13;
// if (number === 1) {
//   console.log('condition = 1');
// } else if (number > 10 && number < 15) {
//   // якщо число входить в проміжок від (більше)10 і до 15(менше) //// від 10 до 15
//   console.log('condition 2');
// } else {
//   console.log('condition 3');
// }
