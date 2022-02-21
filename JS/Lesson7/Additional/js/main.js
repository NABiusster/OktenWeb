// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

let geo = new Geo(-37.3159, 81.1496);
let address = new Address("Kulas Light", "Apt. 556", "Gwenborough,", "92998-3874", geo);
let company = new Company("Romaguera-Crona", "Multi-layered client-server neural-net", "harness real-time e-markets");
let user = new User(1, "Leanne Graham", "Bret", "Sincere@april.biz", address, "1-770-736-8031 x56442", "hildegard.org", company);
console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
class Tag {
    constructor(name, description, attributes) {
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }
}

class Attribute {
    constructor(name, actionDescription) {
        this.name = name;
        this.description = actionDescription;
    }

}

let attributesArray = [
    ["a", "href", "Задает адрес документа, на который следует перейти."],
    ["a", "title", "Добавляет всплывающую подсказку к тексту ссылки."],
    ["div", "align", "Задает выравнивание содержимого тега"],
    ["div", "title", "Добавляет всплывающую подсказку к содержимому."],
    ["h1", "align", "Задает выравнивание содержимого тега"],
    ["h1", "accesskey", "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш."],
]

let tagArray = [
    ["a", "Тег является одним из важных элементов HTML и предназначен для создания ссылок."],
    ["div", "Тег является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого."],
    ["h1", "Тег представляет собой наиболее важный заголовок первого уровня."],
]

let fillAttrObjArray = (Obj, array) => {
    let objArray = [];
    for (let i = 0; i < array.length; i++) {
//        if (array[i][0] === tag) {
            let [, name, description] = array[i];
            objArray.push(new Obj(name, description));
 //       }
    }
    return objArray
}


let fillTagObjArray = () => {
    let objArray = [];
    for (let i = 0; i < tagArray.length; i++) {
        let filedAttribArray = fillAttrObjArray(Attribute, attributesArray.filter(value => value[0] === tagArray[i][0]))
        let [name, description] = tagArray[i];
        objArray.push(new Tag(name, description, filedAttribArray))
    }
    return objArray;
}
console.log(fillTagObjArray())
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }