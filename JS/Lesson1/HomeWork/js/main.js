// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a1 = "hello";
let a2 = "owu";
let a3 = "com";
let a4 = "ua";
let a5 = 1;
let a6 = 10;
let a7 = -999;
let a8 = 123;
let a9 = 3.14;
let a10 = 2.7;
let a11 = true;
let a12 = false;
console.log(`${a1}, ${a2}, ${a3}, ${a4}, ${a5}, ${a6}, ${a7}, ${a8}, ${a9}, ${a10}, ${a11}, ${a12}`);
alert(`${a1}, ${a2}, ${a3}, ${a4}, ${a5}, ${a6}, ${a7}, ${a8}, ${a9}, ${a10}, ${a11}, ${a12}`);
document.write(`${a1},<br/> ${a2}, <br/> ${a3}, <br/> ${a4}, <br/> ${a5}, <br/> ${a6}, <br/> ${a7}, <br/> ${a8}, <br/> ${a9}, <br/> ${a10}, <br/> ${a11}, <br/> ${a12}`)


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
a1="a1";
a2="a2";
a3="a3";
a4="a4";
a5="a5";
a6="a6";
a7="a7";
a8="a8";
a9="a9";
a10="a10";
a11="a11";
a12="a12";
console.log(`${a1}, ${a2}, ${a3}, ${a4}, ${a5}, ${a6}, ${a7}, ${a8}, ${a9}, ${a10}, ${a11}, ${a12}`);
alert(`${a1}, ${a2}, ${a3}, ${a4}, ${a5}, ${a6}, ${a7}, ${a8}, ${a9}, ${a10}, ${a11}, ${a12}`);
document.write(`${a1},<br/> ${a2}, <br/> ${a3}, <br/> ${a4}, <br/> ${a5}, <br/> ${a6}, <br/> ${a7}, <br/> ${a8}, <br/> ${a9}, <br/> ${a10}, <br/> ${a11}, <br/> ${a12}`)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let firstName = prompt("Ім'я");
let lastName = prompt("Прізвище");
let middleName = prompt("По-батькові");
let person = `${lastName} ${firstName} ${middleName}`;
let age = prompt("Ваш вік?");
console.log(person);
console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age}  років"`)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(`a is ${typeof a}, b is ${typeof b}, c is ${typeof c}`)
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
console.log( 5 >= 6 );
console.log( 5 === 6);
console.log( 5  > 6);
console.log( 123 === '123');
console.log( 123 === '123');


console.log( 123 === '123');
console.log( 123 == '123');

//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
