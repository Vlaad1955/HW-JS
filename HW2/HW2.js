//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let assessments = [1, 10, 3, 4, "transmission", 7, 9, 12, 9, "transmission"];
for(i=0; i < assessments.length; i++){
    console.log(assessments[i]);
}

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Tiger Trappers ",
    pageCount: 281,
    genre: "Adventure novel"
};

let book2 = {
    title: "I (Romance)",
    pageCount: 20,
    genre: "Psychological novel"
};

let book3 = {
    title: "1984",
    pageCount: 328,
    genre: "Dystopian"
};

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1Full = {
    title: "Tiger Trappers ",
    pageCount: 281,
    genre: "Adventure novel",
    authors:[
        {
            name: "Ivan Bagryany",
            age: 56
        }
    ]
};

let book2Full = {
    title: "I (Romance)",
    pageCount: 20,
    genre: "Psychological novel",
    authors:[
        {
            name: "Mykola Khvylovy",
            age: 39
        }
    ]
};

let book3Full = {
    title: "1984",
    pageCount: 328,
    genre: "Dystopian",
    authors: [
        {
            name: "George Orwell",
            age: 46
        }
    ]
};

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    { name: "Doe", username: "johndoe", password: "password123" },
    { name: "Jane", username: "janesmith", password: "passw0rd" },
    { name: "Alice", username: "alicej", password: "alice2024" },
    { name: "Bob", username: "bobbrown", password: "bobbyB123" },
    { name: "Fdfse", username: "charlieblack", password: "charliePW" },
    { name: "Fffan", username: "davidwhite", password: "davidW2024" },
    { name: "Eve", username: "evegreen", password: "eveGpassword" },
    { name: "Gadwd", username: "frankblue", password: "frank123blue" },
    { name: "Garri", username: "graceyellow", password: "grace2024" },
    { name: "Hank", username: "hankred", password: "hankRpw123" }
];

for(i=0; i < users.length; i++) {
    console.log(users[i].password);
}

//описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
let temperaturesForWeek = [
    {day:1, morningT:-2, afternoonT:2, evening:0},
    {day:2, morningT:-5, afternoonT:0, evening:-2},
    {day:3, morningT:-7, afternoonT:0, evening:-3},
    {day:4, morningT:0, afternoonT:2, evening:0},
    {day:5, morningT:1, afternoonT:3, evening:1},
    {day:6, morningT:2, afternoonT:4, evening:2},
    {day:7, morningT:3, afternoonT:5, evening:3}
]

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x;
let a=1;
let b=0;
let c=-3;

x = a;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

x = b;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

x = c;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time;

if (time < 15) {
    console.log("Перша чверть години");
} else if ( time < 30) {
    console.log("Друга чверть години");
} else if (time < 45) {
    console.log("Третя чверть години");
} else if (time <= 59) {
    console.log("Четверта чверть години");
} else {
    console.log("Невірне значення часу");
}

//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day;

if (day <= 10) {
    console.log("Перша декада місяця");
} else if (day <= 20) {
    console.log("Друга декада місяця");
} else if ( day <= 31) {
    console.log("Третя декада місяця");
} else {
    console.log("Невірне значення дня");
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = +(prompt("Введіть порядковий номер дня тижня (від 1 до 7):"));

switch (dayNumber) {
    case 1:
        console.log("Понеділок - 1)День народження Марії");
        break;
    case 2:
        console.log("Вівторок - 1)Свято Спаса");
        break;
    case 3:
        console.log("Середа - 1)Засідання керівництва 2)Договір Автодор");
        break;
    case 4:
        console.log("Четвер - 1)Забрати авто з ремонту");
        break;
    case 5:
        console.log("П'ятниця - ...");
        break;
    case 6:
        console.log("Субота - 1)Курси англійської 2)Спортзал");
        break;
    case 7:
        console.log("Неділля - 1)Спортзал");
        break;
    default:
        console.log("Введіть число від 1 до 7.");
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let A = +(prompt("Введіть значення А:"));
let B = +(prompt("Введіть значення B:"));

if(A > B){
    console.log(`Число A = ${A} більше за B = ${B}`)
} else if (B > A){
    console.log(`Число B = ${B} більше за A = ${A}`)
}else {
    console.log(`Число A = ${A} дорівнює B = ${B}`)
}

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

if (!x) {
    x = "default";
}

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for(i = 0; i < coursesAndDurationArray.length; i++){
    if(coursesAndDurationArray[i].monthDuration > 5){
        console.log(`Супер ${coursesAndDurationArray[i].title}`)
    }
}