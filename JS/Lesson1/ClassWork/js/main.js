//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let result = a1[0] + a1[1] + a1[2] + a1[3] + a1[4] + a1[5] + a1[6] + a1[7] + a1[8] + a1[9];
console.log("Завдання 1");
console.log(result);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    Caption: "бла-бла",
    Pages: 60,
    Genre: "Ухти"
};
console.log("Завдання 2");
console.log(book);

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    Caption: "бла-бла",
    Pages: 60,
    Genre: "Ухти",
    Authors: ["First", "Second"]
}
console.log("Завдання 3");
console.log(book1);

//4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [{Caption: "1бла-бла", Pages: 61, Genre: "Ухти1", Authors: ["1First", "Second"]},
    {Caption: "2бла-бла", Pages: 62, Genre: "Ухти2", Authors: ["2First", "Second"]},
    {Caption: "3бла-бла", Pages: 63, Genre: "Ухти3", Authors: ["3First", "Second"]},
]
console.log("Завдання 4");
console.log(books[0])
console.log(books[1])
console.log(books[2])

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log("Завдання 5");
console.log(s);

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI * Math.pow(dC / 2, 2) * heightC;
console.log("Завдання 6");
console.log(v);

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.pow((Math.pow(n,2)+Math.pow(m,2)),1/2);
console.log("Завдання 7");
console.log(k);