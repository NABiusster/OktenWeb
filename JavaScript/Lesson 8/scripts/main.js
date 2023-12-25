// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = []
for (let i = 0; i < 10; i++) {
    users.push(new User(i, "name" + i, "surname" + i, "user" + i + "@gmail.com", "+38099999999" + i))

}
console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0))
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(users.sort((a, b) => a.id - b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = []
for (let i = 0; i < 10; i++) {
    let orders = []
    for (let j = 11 - i; j > 1; j--) {
        orders.push({id: j, order: "order" + j})
    }
    clients.push(new Client(i, "name" + i, "surname" + i, "user" + i + "@gmail.com", "+38099999999" + i, orders))
}
console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
console.log(clients.sort((a, b) => a.order.length - b.order.length))
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacture, productionYear, maxSpeed, engineCapacity, driver) {
    this.model = model
    this.manufacture = manufacture
    this.productionYear = productionYear
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity
    this.driver = driver
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`Максимальна швидкість ${this.maxSpeed}`)
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        for (const argumentsKey in this) {
            if (!(typeof (this[argumentsKey]) === "function")) {
                console.log(`${argumentsKey} = ${this[argumentsKey]}`)
            }
        }
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newYear) {
        this.productionYear = newYear
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (newDriver) {
        this.driver = newDriver
    }
}

let car = new Car("Fusion", "Ford", 2006, 210, 1.4, {id: 1})
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(240)
car.info()
car.changeYear(2008)
car.info()
car.addDriver(new User(1, "Andrii", "Nepshii", "nabius@ukr.net", "+38099999991"))
car.info()
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Vehicle {
    constructor(model, manufacture, productionYear, maxSpeed, engineCapacity, driver) {
        this.model = model
        this.manufacture = manufacture
        this.productionYear = productionYear
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
        this.driver = driver
    }


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`Максимальна швидкість ${this.maxSpeed}`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        for (const argumentsKey in this) {
            if (!(typeof (this[argumentsKey]) === "function")) {
                console.log(`${argumentsKey} = ${this[argumentsKey]}`)
            }
        }
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newYear) {
        this.productionYear = newYear
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(newDriver) {
        this.driver = newDriver
    }
}

let car1 = new Vehicle("Fusion1", "Ford1", 2006, 210, 1.4, {id: 1})
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(240)
car1.info()
car1.changeYear(2008)
car1.info()
car1.addDriver(new User(1, "Andrii", "Nepshii", "nabius@ukr.net", "+38099999991"))
car1.info()
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}

let cinderellas = []
for (let i = 0; i < 10; i++) {
    cinderellas.push(new Cinderella(`Cinderella` + i, 20 + i, 35 + i))
}
console.log(cinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella {
    constructor(name, age, footSize) {
        super(name, age, footSize);
    }

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    findCinderella(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === this.footSize) {
                return cinderella
            }
        }
    }
}

let prince = new Prince("Prince", 30, 36)
console.log(prince)
console.log(prince.findCinderella(cinderellas))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(cinderella => cinderella.footSize===prince.footSize))