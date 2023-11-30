// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
    return a * b
}

console.log(areaRectangle(5, 7))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return Math.PI * Math.pow(r, 2)
}

console.log(areaCircle(52))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    return 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h
}

console.log(areaCylinder(15, 7))

// - створити функцію яка приймає масив та виводить кожен його елемент
function displayArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

displayArray([1, 35, 67, 5, 53, 546, 78, 97])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createTagP(text) {
    document.writeln(`<p>${text}</p>`)
}

createTagP("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at atque ipsa iste magnam provident quod sint sunt vel! Ab amet animi doloribus ipsa, nam necessitatibus odio qui saepe ut!")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function textToUl(text) {
    document.writeln("<ul>")
    document.writeln(`<li>${text}</li>`)
    document.writeln(`<li>${text}</li>`)
    document.writeln(`<li>${text}</li>`)
    document.writeln("</ul>")
}

textToUl("Lorem ipsum dolor sit.")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function textToUlNum(text, num) {
    document.writeln("<ul>")
    for (let i = 0; i < num; i++) {
        document.writeln(`<li>${text}</li>`)
    }
    document.writeln("</ul>")
}

textToUlNum("Lorem ipsum dolor.", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayToUl(array) {
    document.writeln("<ul>")
    for (const arrayElement of array) {
        document.writeln(`<li>${arrayElement}</li>`)
    }
    document.writeln("</ul>")
}

arrayToUl([23, 56, "sfdgssgd", false, "[poiuytre"])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayUsers(users) {
    for (const user of users) {
        document.writeln("<div>")
        for (const userKey in user) {
            createTagP(`${userKey}: ${user[userKey]}`)
        }
        document.writeln("</div>")
    }
}

displayUsers([
    {id: 1, name: "cbghc", age: 35},
    {id: 2, name: "zxcvbn", age: 37},
    {id: 3, name: "asdfgh", age: 25},
    {id: 4, name: "qwerty", age: 45}
])

// - створити функцію яка повертає найменьше число з масиву
function minOfArray(array) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min
}

console.log(minOfArray([6, 63, -6, 32, 1]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
// return arr.reduce((a, b) => a + b, 0)
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(sum([1, 2, 3]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr
}

console.log(swap([11, 22, 33, 44], 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (currencyValue["currency"] === exchangeCurrency) {
            return sumUAH/currencyValue["value"]
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'))