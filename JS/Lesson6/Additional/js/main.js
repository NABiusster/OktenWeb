// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
let cutString = (strIn, count) => {
    let arrayOut = [];
    for (let i = 0; i < strIn.length; i += count) {
        arrayOut.push(strIn.slice(i, i + count))
    }
    return arrayOut;
}
document.writeln(cutString("наслаждение", 3)); // [нас,лаж,ден,ие]
//
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
let validEmail = (email) => (email.indexOf("@") > 0) && (email.indexOf(".", email.indexOf("@")) - email.indexOf("@")>1)
// Протестувати на значеннях
console.log(validEmail("someemail@gmail.com"))
console.log(validEmail("someeMAIL@gmail.com"))
console.log(validEmail("someeMAIL@i.ua"))
console.log(validEmail("some.email@gmail.com"))
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
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
console.log(coursesArray.sort((a, b) => b.modules.length-a.modules.length))
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let count = (str5, stringsearch)=> str5.split("").reduce((previousValue, currentValue) => {
        if (currentValue === stringsearch) {
            previousValue++
        }
        return previousValue
    },0)
    let symb = "о", str = "Астрономия это наука о небесных объектах";
 document.writeln(count(str, symb))
// 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let cutString1=(str, n)=>str.split(" ").splice(0,n)

     let str6 = "Сила тяжести приложена к центру масс тела";

 document.writeln(cutString1(str6, 5)) // 'Сила тяжести приложена к центру'
// © 2022 GitHub, Inc.
//     Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
