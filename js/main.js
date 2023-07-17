// ЗАНЯТТЯ 1 ---------------------------------------------------------------------------------------------------------

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

///////////////////////////////////////////////////////////////// ЛОГІЧНІ ОПЕРАТОРИ

// && оператор і ---- вимагає з права і з ліва тру значення, якщо буде фолс то поверне його значення ----ПОВЕРТАЄ ПЕРШИЙ ФОЛС АБО ОСТАННІЙ ТРУ (працює на 6 значень які повертають фолс)
// || --- повертає перше значення true або останній false (працює на 6 значень які повертають фолс)
// оператор нульового злиття ??  працює на 2 значення null undefined

// /////////////////////////////////////FALTHY ЗНАЧЕННЯ ------------

// 0 --- false
// null --- false
// underfined --- false
// false --- false
// NaN ---- false
// "" --- false (empty string)
// false --- false
//console.log(Boolean(-1)); ===> console.log(!!-1); --- аналог буліна !! //result true

// на практиці використовуємо лише строге === порівняння
// console.log(3 === '3');  трійка рядком не переводиться у число, при порівнянні буде ----false----
// console.log(3 == '3'); трійка рядком переводиться у число, при порівнянні буде ----true----

// при порівнянні mango.indexOf(nam) буде -1, тому що відбуваться порівняння і в такому рядці немає такого підрядка

//ЯКЩО ПЕРЕТВОРЮЄМО В NUMBER то не повинно бути крім чисел ніяких букв, інакше буде NaN
//console.log(Number('25.8cm')); // result NaN

// Примітивні типи даних - імутабельні типи даних( не можна мутувати, тобто не можна змінити значення змінної, до поки не перевизначите її +-=/)-----------
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

// console.log(10 >= '7'); //true відбувається приведення типів і порівнюється як звичайні символи

// console.log('2' > '12'); //true порівнюється посимвольно тобто 2 > 1(2) / порівнюєтся по юнікоду 2 - 32 , 1 - 31

// console.log('2' < '12'); //false

// console.log('2' < '2'); //false

// console.log('2' <= '2'); //true

// console.log('4' == 4); //true

// console.log('6' === 6); //false

// console.log(false === 'false'); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); //true

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true (P - 50, p - 70) --- отже якщо рядоки то порівнюємо по юнікоду

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
