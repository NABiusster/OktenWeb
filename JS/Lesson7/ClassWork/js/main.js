// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Driver(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Car(model, manufacture, manufactureYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacture = manufacture;
    this.manufactureYear = manufactureYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    };
    this.info = function () {
        let info = "";
        for (let item in this) {
            if (typeof this[item] !== "function") {
                info = info + item + " = " + this[item] + "\n";
            }
        }
        return info;
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newYear) {
        this.manufactureYear = newYear
    };
    this.addDriver = function (driver) {
        this.driver = driver
    }

}

let car1 = new Car("fusion", "ford", 2006, 210, 1.4);
console.log(car1.drive());
console.log(car1.info());
car1.increaseMaxSpeed(50);
console.log(car1.info());
car1.changeYear(2018);
console.log(car1.info());
car1.addDriver(new Driver("vasya", "pupkin"));
console.log(car1.info());


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class DriverClass {
    firstName;
    lastName;


    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


class CarClass {

    constructor(model, manufacture, manufactureYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacture = manufacture;
        this.manufactureYear = manufactureYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }

    info() {
        let info = "";
        for (let item in this) {
            if (typeof this[item] !== "function") {
                info = info + item + " = " + this[item] + "\n";
            }
        }
        return info;
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newYear) {
        this.manufactureYear = newYear
    };

    addDriver(driver) {
        this.driver = driver
    }
}

let car2 = new CarClass("ssss", "fordssss", 2022, 410, 3.6);
console.log(car2.drive());
console.log(car2.info());
car2.increaseMaxSpeed(50);
console.log(car2.info());
car2.changeYear(2018);
console.log(car2.info());
car2.addDriver(new DriverClass("vasya1", "2pupkin"));
console.log(car2.info());

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.findedShoe = shoeSize;
    }
}

class Princess {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let createArrayPrincesses = () => {
    let arrayPrincesses = [];
    for (let i = 0; i < 10; i++) {
        arrayPrincesses.push(new Princess("Princess" + (i + 1), Math.trunc((Math.random()) * 20) + 25, Math.trunc(Math.random() * 10) + 35))
    }
    return arrayPrincesses;
}
let princesses = createArrayPrincesses();
console.log(princesses);
let prince = new Prince("Prince", 35, 36)
let findPrince = (princesses,prince) => {
    for (let princess of princesses) {
        if (princess.shoeSize === prince.findedShoe) {
            return princess
        }
    }
}
console.log(findPrince(princesses,prince))
console.log(princesses.find(value => (value.shoeSize===prince.findedShoe)))