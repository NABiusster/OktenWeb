// - Дано натуральное число n. Выведите все числа от 1 до n.
console.log("Дано натуральное число n. Выведите все числа от 1 до n.");
let numOutput = (n) => {
    if (!isNaN(n) && n % 1 === 0 && n > 0) {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    } else {
        console.log("Введіть натуральне число");
    }
}

numOutput(Number(prompt("Введіть натуральне число:")))

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// console.log("Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.");
let outputNumFromTo = (a, b) => {
    //Конструкция чуть избыточна, но легче читается.
    if ((!isNaN(a) && a % 1 === 0) && (!isNaN(b) && b % 1 === 0)) {
        for (let i = a; a < b ? i <= b : i >= b; a < b ? i++ : i--) {
            console.log(i)
        }
    } else {
        console.log("Введіть цілі числа!!!!")
    }
}
outputNumFromTo(Number(prompt("Введіть 1 число:")), Number(prompt("Введіть 2 число:")))



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let  changeItem = (array, i) =>{
         let tempItem = array[i+1];
         array[i+1]=array[i];
         array[i]=tempItem;
         return array;
}
console.log(changeItem([9, 8, 0, 4], 0));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let myArray = [1, 0, 6, 0, 3];
let zeroToEnd = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===0){
            array.splice(i, 1);
            array[array.length]=0;
        }
            }
    array.splice(0, 1);
    return array;
}

console.log(zeroToEnd(myArray));