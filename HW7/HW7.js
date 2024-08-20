function getRandomName() {
    const names = ["Alex", "John", "Michael", "Sarah", "Jessica", "Emily", "David", "Laura", "Chris", "Anna"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function getRandomSurname() {
    const surnames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
    const randomIndex = Math.floor(Math.random() * surnames.length);
    return surnames[randomIndex];
}

function getRandomOrder() {
    const orders = ["Apple", "Bread", "Milk", "Meat", "Potato"];
    let orderSize = Math.floor(Math.random() * 5) + 1;
    let order = [];
    for (let i = 0; i < orderSize; i++) {
        let itemIndex = Math.floor(Math.random() * orders.length);
        order.push(orders[itemIndex]);
    }
    return order;
}

function getRandomfootSize() {
    const surnames = [ 33, 40, 43, 28, 26];
    const randomIndex = Math.floor(Math.random() * surnames.length);
    return surnames[randomIndex];
}

//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let UserArr = [];

for(let i=1; i < 11; i++ ){
    let name = getRandomName();
    let surname = getRandomSurname()
    let user = new User(
        i,
        name,
        surname,
        `${name}${i}${surname}@gmail.com`,
        `+380${i}3565774${i}`
    );
    UserArr.push(user);
}

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let UserArrFilter = UserArr.filter(user => user.id%2 ===0);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let UserArrSort = UserArr.sort((a, b) => a.id - b.id);

//#nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User{
    constructor(id, name, surname , email, phone, order) {
        super(id, name, surname , email, phone);
        this.order = order;
    }

    static randomClient(n) {
        let clients = [];
        for(let i=1; i <= n; i++ ){
            let name = getRandomName();
            let surname = getRandomSurname();
            let order = getRandomOrder();
            let client = new Client(
                i,
                name,
                surname,
                `${name}${i}${surname}@gmail.com`,
                `+380${i}3565774${i}`,
                order
            );
            clients.push(client);
        }
        return clients
    }
}

let tenClients = Client.randomClient(10);

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let tenClientsSort = tenClients.sort((a, b) => a.order.length - b.order.length);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, manufacturer, year, MaxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.MaxSpeed = MaxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.MaxSpeed} на годину`);
    };

    this.info = function() {
        console.log(`
        Модель - ${this.model}
        Виробник - ${this.manufacturer}
        Рік випуску - ${this.year}
        Максимальна швидкість - ${this.MaxSpeed}
        Об'єм двигуна - ${this.engineCapacity}
    `)
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.MaxSpeed = newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver){
       this.driver = driver;
    };
}

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };

    static randomCinderella(n) {
        let cinderellas = [];
        for (let i = 1; i <= n; i++) {
            let newCinderella = new Cinderella(
                getRandomName(),
                i + 18,
                getRandomfootSize()
            );
            cinderellas.push(newCinderella);
        }
        return cinderellas;
    };

    static findPrince(cinderellas, prince){
        let MyCinderella = [];
       for (let i=0; i < cinderellas.length; i++){
           if(cinderellas[i].footSize === prince.shoe){
               MyCinderella.push(cinderellas[i]);
           }
       }
       return MyCinderella;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

    static randomPrince(n) {
        let princeArr = [];
        for (let i = 1; i <= n; i++) {
            let newPrince = new Prince(
                getRandomName(),
                i + 18,
                getRandomfootSize()
            );
            princeArr.push(newPrince);
        }
        return princeArr;
    };

    static findCinderella (cinderellas, prince){
        return cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
    }
}

let cinderellas1 = Cinderella.randomCinderella(10);
let prince1 = Prince.randomPrince(1)[0];

let matchedCinderellas = Cinderella.findPrince(cinderellas1, prince1);
let matchedCinderella = Prince.findCinderella(cinderellas1, prince1);

console.log('findPrince -', matchedCinderellas);
console.log('findCinderella -', matchedCinderella);

//Через Array.prototype. створити власний foreach, filter

//Не розумію як зробити це завдання :(