// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strHelloWord = "hello world";
let strLoremIpsum = "lorem ipsum";
let strJsCool = "javascript is cool";
console.log("Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'");
console.log(`Довжина сроки '${strHelloWord}':${strHelloWord.length}`);
console.log(`Довжина сроки '${strLoremIpsum}':${strLoremIpsum.length}`);
console.log(`Довжина сроки '${strJsCool}':${strJsCool.length}`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log("Перевести до великого регістру стрінгові значення");
console.log(strHelloWord.toUpperCase() + ", " + strLoremIpsum.toUpperCase() + ", " + strJsCool.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log("'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'".toLowerCase());
console.log("HELLO WORLD".toLowerCase());
console.log("LOREM IPSUM".toLowerCase());
console.log("JAVASCRIPT IS COOL".toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim())
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let stringToarray = (str) => str.split(" ");
let str1 = 'Каждый охотник желает знать';
let arr = stringToarray(str1);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let delete_characters=(strIn, lengthDelete) => strIn.substring(0,lengthDelete);
let str2 = 'Каждый охотник желает знать';
console.log(delete_characters(str2, 7))
document.writeln(delete_characters(str2, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let insert_dash=(str) => str.split(" ").join("-").toUpperCase()
let str3 = "HTML JavaScript PHP";
 document.writeln(insert_dash(str3)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let capsFirstLetter=(strIn => strIn.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(' ') )

// let capsFirstLetter=(strIn) => {
//     let arrWord = strIn.split(" ");
//     console.log(arrWord)
//     let wordTo1Cap = arrWord.map(word => word[0].toUpperCase() + word.substring(1));
//     return wordTo1Cap.join(" ");
// }


console.log(capsFirstLetter("dsf dkskldg zsd fgl"));

