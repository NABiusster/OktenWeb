/*Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let randomArray = [
    "Lorem ipsum dolor.",
    125,
    false,
    "Lorem ipsum.",
    586, 789.55,
    true,
    "Lorem ipsum dolor sit amet.",
    147.258,
    false
];
console.log(randomArray[0])
console.log(randomArray[1])
console.log(randomArray[2])
console.log(randomArray[3])
console.log(randomArray[4])
console.log(randomArray[5])
console.log(randomArray[6])
console.log(randomArray[7])
console.log(randomArray[8])
console.log(randomArray[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Nineteen Eighty-Four",
    pageCount: 432,
    genre: "Science fiction"
};
let book2 = {
    title: "Dune (Book 1)",
    pageCount: 592,
    genre: "Science fiction"
}
let book3 = {
    title: "Do Androids Dream of Electric Sheep?",
    pageCount: 208,
    genre: "Science fiction"
};
console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
book1.authors = [
    {name: "George Orwell", age: 46},
    {name: "NoName", age: 100}
];
book2.authors = [
    {name: " Frank Herbert", age: 65}
];
book3.authors = [
    {name: "Philip K. Dick", age: 53}
];
console.log(book1);
console.log(book2);
console.log(book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let usersArray = [
    {name: "Name1", username: "UserName1", password: "PassWorD1"},
    {name: "Name2", username: "UserName2", password: "PassWorD2"},
    {name: "Name3", username: "UserName3", password: "PassWorD3"},
    {name: "Name4", username: "UserName4", password: "PassWorD4"},
    {name: "Name5", username: "UserName5", password: "PassWorD5"},
    {name: "Name6", username: "UserName6", password: "PassWorD6"},
    {name: "Name7", username: "UserName7", password: "PassWorD7"},
    {name: "Name8", username: "UserName8", password: "PassWorD8"},
    {name: "Name9", username: "UserName9", password: "PassWorD9"},
    {name: "Name10", username: "UserName10", password: "PassWorD10"}
];
console.log(usersArray[0]["password"]);
console.log(usersArray[1]["password"]);
console.log(usersArray[2]["password"]);
console.log(usersArray[3]["password"]);
console.log(usersArray[4]["password"]);
console.log(usersArray[5]["password"]);
console.log(usersArray[6]["password"]);
console.log(usersArray[7]["password"]);
console.log(usersArray[8]["password"]);
console.log(usersArray[9]["password"]);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (+(prompt("Введіть число")) === 0) {
    console.log("Невірно")
} else {
    console.log("Вірно")
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +(prompt("Введіть число від 0 до 59"));
/*switch (Math.trunc(time / 15)) {
    case 0: {
        console.log("Перша четверть години")
        break
    }
    case 1: {
        console.log("Друга четверть години")
        break
    }
    case 2: {
        console.log("Третя четверть години")
        break
    }
    case 3: {
        console.log("Четверта четверть години")
        break
    }
    default: {
        console.log("Введіть ЧИСЛО від 0 до 59!!!")
    }
}*/
if (time >= 0 && time < 15) {
    console.log("Перша четверть години")
} else if (time > 14 && time < 30) {
    console.log("Друга четверть години")
} else if (time > 29 && time < 45) {
    console.log("Третя четверть години")
} else if (time > 44 && time < 60) {
    console.log("Четверта четверть години")
} else {
    console.log("Введіть ЧИСЛО від 0 до 59!!!")
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +(prompt("Введіть число від 1 до 31"));
if (day >= 1 && day < 11) {
    console.log("Перша декада  місяця")
} else if (day >= 10 && day < 21) {
    console.log("Друга декада  місяця")
} else if (day >= 20 && day <= 31) {
    console.log("Третя декада  місяця")
} else {
    console.log("Введіть ЧИСЛО від 1 до 31!!!")
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (+(prompt("Введіть порядковий номер дня тижня"))) {
    case 1: {
        console.log("Monday")
        break
    }
    case 2: {
        console.log("Tuesday")
        break
    }
    case 3: {
        console.log("Wednesday")
        break
    }
    case 4: {
        console.log("Thursday")
        break
    }
    case 5: {
        console.log("Friday")
        break
    }
    case 6: {
        console.log("Saturday")
        break
    }
    case 7: {
        console.log("Sunday")
        break
    }
    default: {
        console.log("Введіть порядковий номер дня тижня 1-7!!!!")
    }
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 15
let b = 25
if (a > b) {
    console.log("max = a = ", a)
} else if (a < b) {
    console.log("max = b = ", b)
} else {
    console.log("a = b = ", b)
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = prompt("Введіть будь-яке значення")
if (x === "" || x === 0 || x === null || x === undefined) {
    x = "default"
}
console.log(x)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0]["monthDuration"] > 5) {
    console.log("Super!!!")
}
if (coursesAndDurationArray[1]["monthDuration"] > 5) {
    console.log("Super!!!")
}
if (coursesAndDurationArray[2]["monthDuration"] > 5) {
    console.log("Super!!!")
}
if (coursesAndDurationArray[3]["monthDuration"] > 5) {
    console.log("Super!!!")
}
if (coursesAndDurationArray[4]["monthDuration"] > 5) {
    console.log("Super!!!")
}
if (coursesAndDurationArray[5]["monthDuration"] > 5) {
    console.log("Super!!!")
}