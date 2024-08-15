//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = (NumbA, NumbB) => NumbA * NumbB;
//створити функцію яка обчислює та повертає площу кола з радіусом r

const squareArea = (NumbR) => Math.PI * NumbR * NumbR;
//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const squareCylinder = (radius, height) => 2 * (Math.PI * Math.pow(radius, 2)) + (2 * Math.PI * radius * height);
//створити функцію яка приймає масив та виводить кожен його елемент

const ArrElement = (arr) => {
    for (let i=0; i< arr.length; i++){
        console.log(arr[i]);
    }
};
//створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

const createParagraph = (text) => document.write(`<p>${text}</p>`);
//створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

const createList = (text) =>
    document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`
    );
//створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

const  createListN = (text,numberOfSections) => {
    document.write('<ul>');
    for (let i = 1; i <= numberOfSections; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};
//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

const createListArr = (arr) => {
    document.write(`<ul>`)
    for (let i=0; i< arr.length; i++){
        document.write(`<li> ${arr[i]} </li>`)
    }
    document.write(`</ul>`)
};
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const displayObjects = (arr) => {
    for(let i=0; i< arr.length; i++){
        document.write(`<div>
<p>${arr[i].id}</p>
<p>${arr[i].name}</p>
<p>${arr[i].age}</p>
</div>`);
    }
};
//створити функцію яка повертає найменьше число з масиву

const minArr = (arr) => {
    let min = arr[0];
    for (let i=1; i <arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min
};
//створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.

const sumArr = (arr) => {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
};
//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

const swap = (arr, index1, index2) => {
    let nun = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = nun;
};
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i=0; i < currencyValues.length; i++){
        if(currencyValues[i].currency === exchangeCurrency){
            return sumUAH / currencyValues[i].value;
        }
    }
    return "Валюта не знайдена"
}