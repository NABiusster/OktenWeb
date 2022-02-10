//TODO - створити функцію стрілочного типу, яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log("створити функцію стрілочного типу, яка обчислює та повертає площу прямокутника зі сторонами а і б");

let areaRectangle = (a, b) => a * b;

console.log(`Площа прямокутника: ${areaRectangle(5, 3)}`);

//TODO - створити функцію стрілочного типу, яка обчислює та повертає площу кола з радіусом r
console.log("створити функцію стрілочного типу, яка обчислює та повертає площу кола з радіусом r");

let areaCircle = (r) => Math.PI * Math.pow(r, 2);

console.log(`Площа кола: ${areaCircle(5)}`);

//TODO - створити функцію стрілочного типу, яка обчислює та повертає площу циліндру висотою h, та радіусом r
console.log("створити функцію  стрілочного типу, яка обчислює та повертає площу циліндру висотою h, та радіусом r");

let areaCylinder = (r, h) => Math.PI * Math.pow(r, 2) * h;

console.log(`Площа циліндра: ${areaCylinder(5, 10)}`);

//TODO - створити функцію стрілочного типу, яка приймає масив та виводить кожен його елемент
console.log("створити функцію стрілочного типу, яка приймає масив та виводить кожен його елемент")

let arrayOut = (array) => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

arrayOut(["teyty", 4543, 65445, true])

//TODO - створити функцію стрілочного типу, яка створює параграф з текстом. Текст задати через аргумент
document.write("створити функцію стрілочного типу, яка створює параграф з текстом. Текст задати через аргумент")

let createParagraph = (text) => {
    document.write(`<p>${text}</p>`);
}

createParagraph("Параграф");

//TODO - створити функцію стрілочного типу, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write("створити функцію стрілочного типу, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий")

let create3Li = (text) => {
    document.write("<ul>");
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write("</ul>");
}

create3Li("Список")
//TODO - створити функцію стрілочного типу, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write("створити функцію стрілочного типу, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим");

let createNLi = (text, count) => {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text} ${i + 1}</li>`);
    }
    document.write("</ul>");
}

createNLi("List", 5)

//TODO - створити функцію стрілочного типу, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write("створити функцію стрілочного типу, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список")

let createLiFromArray = (...array) => {
    document.write("<ul>");
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write("</ul>");
}

createLiFromArray("List", 5, false)

//TODO - створити функцію стрілочного типу, яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write("створити функцію стрілочного типу, яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.")

let createDivFromArrObject = (array) => {
    for (let arrayElement of array) {
        document.write("<div>");
        for (let personItem in arrayElement) {
            document.write(`<div>${personItem}: ${arrayElement[personItem]}</div>`);
        }
        document.write("</div>");
    }
}

createDivFromArrObject([{id: 0, name: "vasya", age: 30}, {id: 1, name: "petya", age: 31}])
