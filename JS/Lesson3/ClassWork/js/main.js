// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     1. перебрати його циклом while
console.log("перебрати масив циклом while");
let i = 0;
while (i < arr.length) {
    console.log(arr[i])
    i++
}

//     2. перебрати його циклом for
console.log("перебрати його циклом for");
for (let arrItem of arr) {
    console.log(arrItem);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("3. перебрати циклом while та вивести  числа тільки з непарним індексом")
i = 0;
while (i < arr.length) {
    if (!(i % 2 === 0)) {
        console.log(arr[i]);
    }
    i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("4. перебрати циклом for та вивести  числа тільки з непарним індексом")
for (i = 0; i < arr.length; i++) {
    if (!(i % 2 === 0)) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(" перебрати циклом while та вивести  числа тільки парні  значення")
i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("перебрати циклом for та вивести  числа тільки парні  значення")
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log("замінити кожне число кратне 3 на слово \"okten\"")
for (let arrItem of arr) {
    if (arrItem % 3 === 0) {
        console.log("okten");
    } else {
        console.log(arrItem);
    }

}
// 8. вивести масив в зворотньому порядку.
console.log("вивести масив в зворотньому порядку.")
let arrReverse = arr.reverse();
for (let arrReverseItem of arrReverse) {
    console.log(arrReverseItem);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
arr.reverse();
console.log("перебрати масив в зворотньому циклі while");
i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}

//     2. перебрати його циклом for
console.log("перебрати його в зворотньому циклі for");

for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("перебрати в зворотньому циклі while та вивести  числа тільки з непарним індексом")
i = arr.length - 1;
while (i >= 0) {
    if (!(i % 2 === 0)) {
        console.log(arr[i]);
    }
    i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("4. перебрати в зворотньому циклі  for та вивести  числа тільки з непарним індексом")

for (i = arr.length - 1; i >= 0; i--) {
    if (!(i % 2 === 0)) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(" перебрати в зворотньому циклі while та вивести  числа тільки парні  значення")
i = arr.length - 1;
while (i >= 0) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i--;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("перебрати в зворотньому циклі for та вивести  числа тільки парні  значення")
for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log("в зворотньому циклі замінити кожне число кратне 3 на слово \"okten\"")
for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        console.log("okten");
    }else{console.log(arr[i]);}
}