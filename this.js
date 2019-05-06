// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(10, 5);

///////////////////////////////////////////////


// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

///////////////////////////////////////////////
// let user = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// console.log(sayName.call(user, 'Smit')); // Можно передать параметры только строку
// console.log(sayName.apply(user, ['Snow'])); // Можно передать параметры в виде массива

// function count(number){
//     return this * number;
// }

// let double = count.bind(2);// 2 будет контекстом вызова для this
// console.log(double(3));
// console.log(double(10));

///////////////////////////////////////////////

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});


// 1) Просто вызов функции - window/undefined
// 2) Метод оьекта - this = обьект
// 3) Конструтор (new) - this = новый созданный обьект
// 4) Насильно привязать что-то к this при помощи call, apply либо bind