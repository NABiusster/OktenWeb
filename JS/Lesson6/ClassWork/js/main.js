// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
console.log("Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його")
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normalizeSpaceSeparator = (noNormalizeStr, separator) => {
    return noNormalizeStr.trim().replace(separator, " ").replaceAll(separator, "")

}
console.log(normalizeSpaceSeparator(n1, "."));
console.log(normalizeSpaceSeparator(n2, "-"));
console.log(normalizeSpaceSeparator(n3, "_"));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log("створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.");

let generateRandomValArr = (lengthArray) => {
    let generatedArray = [];
    for (let i = 0; i < lengthArray; i++) {
        generatedArray.push(Math.trunc(Math.random() * 100));
    }
    return generatedArray
}
console.log(generateRandomValArr(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log("створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort")
console.log(generateRandomValArr(10).sort((current, next) => current - next));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log("створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа")
console.log(generateRandomValArr(10).filter(value => {
    if (value % 2 === 0) {
        return value
    }
}));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log("створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.")
console.log(generateRandomValArr(10).map(value => value + ""))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
console.log("створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.")
let sortNums = (array, direction) => {
    if (direction === "ascending") {
        return array.sort((current, next) => current - next);
    } else if (direction === "descending") {
        return array.sort((current, next) => next - current);
    } else
        return array;
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

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
console.log("відсортувати масив за спаданням за monthDuration");
console.log(coursesAndDurationArray.sort((currentCourse, nextCourse) => nextCourse.monthDuration - currentCourse.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log("відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців");
console.log(coursesAndDurationArray.filter(value => {
    if (value.monthDuration > 5) {
        return value
    }
}))
