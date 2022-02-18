// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let generateUniqueId = (array) => {
    let newId = 0;
    do {
        newId = Math.trunc(Math.random() * 100);
    } while (array.find(value => value === newId))
    return newId;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let createArray10Users = () => {
    let array = [];
    for (let i = 1; i < 11; i++) {
        array.push(new User(generateUniqueId(array.map(value => value.id)), "User " + i, "SomeSurname" + i, "abra" + i + "@gmail.com", "+380123456" + i - 1))
    }
    return array;
}

let users = createArray10Users();
console.log(users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0))

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id))
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User {
    constructor(id, name, surname, email, phone, orders) {
        super(id, name, surname, email, phone);
        this.orders = orders;
    }
}

class Order {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let generateRandomOrdersArray = () => {
    let count = Math.trunc(Math.random() * 10) + 1;
    let array = [];
    for (let i = 1; i < count; i++) {
        array.push(new Order(generateUniqueId(array.map(value => value.id)), "Заказ " + i));
    }
    return array;
}

let generate10ClientArray = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(new Client(generateUniqueId(array.map(value => value.id)), "Клієнт " + (i + 1), "Батькович " + i + 1, "abra" + i + "@gmail.com", "+380123456" + i, generateRandomOrdersArray()));
    }
    return array;
}

// створити пустий масив, наповнити його 10 об'єктами Client

let orders = generate10ClientArray();
console.log(orders);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(orders.sort((a, b) => a.orders.length - b.orders.length))
