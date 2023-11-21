// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let str1 = "hello", str2 = 'owu', str3 = 'com', str4 = "ua";
let num1 = -999, num2 = 123, num3 = 3.14, num4 = 2.7, num5 = 16;
let bool1 = true, bool2 = false;
console.log(`${str1} ${str2}.${str3}.${str4}`);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(bool1, bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Андрій", lastName = "Непшій", middleName = "Богданович";
console.log(lastName + " " + firstName + " " + middleName);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log("a has type", typeof a)
console.log("b has type", typeof b)
console.log("c has type", typeof c)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
console.log(prompt("Веедіть своє Пізвище"),prompt("Веедіть своє Ім'я"),prompt("Веедіть своє По-батькові"))