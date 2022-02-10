//TODO створити функцію стрілочного типу яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log("створити функцію стрілочного типу яка приймає три числа та виводить найменьше. (Без Math.min!)")

let findMin = (a, b, c) => {
    let result = a;
    if (result > b) {
        result = b;
    } else if (result > c) {
        result = c;
    }
    return result;
}

console.log(`Min = ${findMin(546, 6767, 34)}`)

//TODO - створити функцію стрілочного типу яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log("створити стрілочного типу функцію яка приймає три числа та виводить найбільше. (Без Math.max!)")

let findMax = (a, b, c) => {
    let result = a;
    if (result < b) {
        result = b;
    } else if (result < c) {
        result = c;
    }
    return result;
}

console.log(`Max = ${findMax(546, 6767, 34)}`)

//TODO - створити функцію стрілочного типу яка повертає найбільше число з масиву
console.log("створити функцію стрілочного типу яка повертає найбільше число з масиву")

let findMaxInArray = (array) => {
    let result = array[0];
    for (let arrayElement of array) {
        if (result < arrayElement) {
            result = arrayElement;
        }
    }
    return result;
}

console.log(`Max = ${findMaxInArray([546, 6767, 34])}`)

//TODO - створити функцію стрілочного типу яка повертає найменьше число з масиву
console.log("створити функцію стрілочного типу, яка повертає найменьше число з масиву")

function findMinInArray(array) {
    let result = array[0];
    for (let arrayElement of array) {
        if (result > arrayElement) {
            result = arrayElement;
        }
    }
    return result;
}

console.log(`Min = ${findMinInArray([546, 6767, 34])}`)

//TODO - створити функцію  стрілочного типу, яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log("створити функцію  стрілочного типу, яка приймає масив чисел, сумує значення елементів масиву та повертає його")

let sumOfArray = (array) => {
    let result = 0;
    for (let arrayElement of array) {
        result += arrayElement
    }
    return result;
}

console.log(`Sum = ${sumOfArray([30, 20, 50])}`)

//TODO- створити функцію  стрілочного типу, яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log("створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його")

let averageOfArray = (array) => {
    let result = 0;
    for (let arrayElement of array) {
        result += arrayElement
    }
    return result / array.length;
}

console.log(`Average = ${averageOfArray([30, 20, 50, 100])}`)

//TODO - створити функцію стрілочного типу, яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log("створити функцію  стрілочного типу, яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше")

let minNumber = (...array) => {
    let min = array[0], max = array[0];
    for (let arrayElement of array) {
        if (min > arrayElement) {
            min = arrayElement;
        }
        if (max < arrayElement) {
            max = arrayElement;
        }
    }
    console.log(`Max = ${max}`);
    return min;
}

console.log(`Min = ${minNumber(30, 20, 50, 100)}`)

//TODO- створити функцію  стрілочного типу, яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log("створити функцію  стрілочного типу, яка заповнює масив рандомними числами та виводить його.")

let fillArray = (array) => {
    for (let arrayElement of array) {
        arrayElement = Math.round(Math.random() * 100);
        console.log(arrayElement);
    }
}

fillArray([null, null, null, null, null, null, null]);

//TODO - створити функцію  стрілочного типу, яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
console.log("створити функцію стрілочного типу, яка заповнює масив рандомними числами в діапазоні від 0 до limit")

let fillArrayWithLimit = (array, limit) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
    return array;
}

console.log(fillArrayWithLimit([100, 101, 102, 103, 104, 105, 106], 50))

//TODO - Функція  стрілочного типу, приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log("Функція  стрілочного типу, приймає масив та робить з нього новий масив в зворотньому порядку.")

let reverseArray = (array) => {
    let reverseArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArr[reverseArr.length] = array[i];
    }
    return reverseArr;
}

console.log(reverseArray([30, 20, 50, 100]));