//- створити блок,
//- додати йому класи wrap, collapse, alpha, beta
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//- додати цей блок в body.
//- клонувати його повністю, та додати клон в body.
let div1 = document.createElement(`div`)
div1.classList.add('wrap', 'collapse', 'alpha', 'beta');
div1.style.color = "white";
div1.style.backgroundColor = "gold";
div1.style.fontSize = "20px";
document.body.appendChild(div1);
let div2 = div1.cloneNode(true);
document.body.appendChild(div2);

//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let shop = ['Main','Products','About us','Contacts'];
let shopping = document.createElement(`ul`);
for(let i = 0; i < shop.length; i++){
    let li = document.createElement(`li`);
    li.innerText = `${shop[i]}`;
    shopping.appendChild(li);
}
document.body.appendChild(shopping);

//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i=0; i <coursesAndDurationArray.length; i++){
    let div = document.createElement(`div`);
    let h1 = document.createElement(`h1`);
    let p = document.createElement(`p`);
    h1.innerText = coursesAndDurationArray[i].title;
    p.innerText = `Month Duration - ${coursesAndDurationArray[i].monthDuration}`
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//Завдання робити через цикли.
for (let i=0; i <coursesAndDurationArray.length; i++) {
    let div = document.createElement(`div`);
    div.classList.add("item")
    let h1 = document.createElement(`h1`);
    h1.classList.add("heading")
    let p = document.createElement(`p`);
    p.classList.add("description")
    h1.innerText = coursesAndDurationArray[i].title;
    p.innerText = `Month Duration - ${coursesAndDurationArray[i].monthDuration}`
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}