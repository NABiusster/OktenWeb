// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strArray = ['hello world', 'lorem ipsum', 'javascript is cool']
for (let string of strArray) {
    console.log(string, string.length)

}
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
for (let string of strArray) {
    console.log(string.toUpperCase())
}
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (let string of strArray) {
    console.log(string.toUpperCase().toLowerCase())
}

// - Є "брудна" стрінга
let str = ' dirty string   '//. Почистити її від зайвих пробілів.
console.log(str.trim())
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str1 = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(" ");
let arr = stringToArray(str1); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(arr)
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
let numArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let strArray1 = numArray.map(value => value.toString())
console.log(strArray1)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (nums, sorting) => {
    if (sorting === "ascending") {
        return nums.sort((a, b) => a - b)
    } else
        return nums.sort((a, b) => b - a);
};
console.log(sortNums(nums, 'ascending')) // [3,11,21]
console.log(sortNums(nums, 'descending')) // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((value, index) => {
    value.id = index
    return value
}))

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuits = ['spade', 'diamond', 'heart', 'clubs']
let cardValues = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']
let cardDesk = []

function fillCardSuit() {
    for (const suit of cardSuits) {
        let color
        if (suit === "diamond" || suit === "heart") {
            color = "red"
        } else {
            color = "black"
        }
        for (const value of cardValues) {
            cardDesk.push({cardSuit: suit, value: value, color: color})
        }
    }
}

fillCardSuit()
// - знайти піковий туз
console.log(cardDesk.find(card => card.value === "ace" && card.cardSuit === "spade"))

// - всі шістки
console.log(cardDesk.filter(card => card.value === 6))

// - всі червоні карти
console.log(cardDesk.filter(card => card.color === "red"))

// - всі буби
console.log(cardDesk.filter(card => card.cardSuit === "diamond"))

// - всі трефи від 9 та більше
console.log(cardDesk.filter(card => (card.value > 9 || !+(card.value)) && card.cardSuit === "clubs"))

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(cardDesk.reduce((acc, item) => {
    if (!acc[item["cardSuit"]]) {
        acc[item["cardSuit"]] = []
    }
    acc[item["cardSuit"]].push(item)
    return acc
}, {}))

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((value) =>value.modules.includes("sass") ))
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((value) =>value.modules.includes("docker") ))
