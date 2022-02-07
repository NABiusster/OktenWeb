// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrNum = [45, 67, 23, 87, 34];
let arrTxt = ["fdhfd", "fhdhfd", "fhfh", "fhdfhd", "fhdfhd"];
let arrAny = ["fgdsfgdfgdh", 67, 98, true, "fgd", ...arrNum, ...arrTxt];

for (let i = 0; i < arrAny.length; i++) {
    console.log(`ArrAny[${i}] = ${arrAny[i]} ;`);
}

console.log("Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль")
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrNull = [null, null, null, null, null, null, null];
for (let i = 0; i < arrNull.length; i++) {
    arrNull[i] = i + 1;
    console.log(`ArrNull[${i}] = ${arrNull[i]} ;`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write("<div>Блок</div>");
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Блок ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0
while (i < 20) {
    document.write("<h1>Заголовок</h1>");
    i++
}
i = 0
while (i < 20) {
    document.write(`<h1>Заголовок ${i}</h1>`);
    i++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = [67, 6, 9, 53, 78, 345, 67, 78, 546, 90]
for (let arrItem of arr1) {
    console.log(arrItem);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log(" - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.")
let arr2 = ["ghjghghghghjg", "kljkhgfjg", "htydtgjhm", ";lkjihghk", "tyuthgf", "fdgydd", "dfsdfser", "m,vbne", "ygjurt56", "tr5de"];
for (let arrItem of arr2) {
    console.log(arrItem);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log(" - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.")
let arr3 = ["ghjghghghghjg", 46534, "htydtgjhm", [1, 2, 3, 4, 5], "tyuthgf", true, 4566, {
    NaMe: "fsdgdfsg",
    Last: "45344"
}, "ygjurt56", "tr5de"];
for (let arrItem of arr3) {
    console.log(arrItem);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log(" - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи")
let arr4 = ["ghjghghghghjg", 46534, "htydtgjhm", false, "tyuthgf", true, 4566, 44, "ygjurt56", "tr5de"];
for (let arrItem of arr4) {
    if (typeof arrItem === "boolean") {
        console.log(arrItem);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи")
for (let arrItem of arr4) {
    if (typeof arrItem === "number") {
        console.log(arrItem);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи")
for (let arrItem of arr4) {
    if (typeof arrItem === "string") {
        console.log(arrItem);
    }
}

console.log(" - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.")
let arr5 = [null, null, null, null, null, null, null, null, null, null];
TempB = false;
for (let j = 0; j < 10; j += 3) {
    arr5[j] = `Text ${j}`;
}
for (let j = 1; j < 10; j += 3) {
    arr5[j] = TempB;
    TempB = !TempB;
}
for (let j = 2; j < 10; j += 3) {
    arr5[j] = j;
}
for (let arr5Element of arr5) {
    console.log(arr5Element);
}
console.log("- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write")
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
console.log("- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write")
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// щоб було 100 ітерацій з кроком 2 j=100*2
for (let j = 0; j < 200; j += 2) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(`<div>${j}</div>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (!(j % 2 === 0)) {
        console.log(j);
        document.write(`<div>${j}</div>`);
    }
}




