'use strict';

//  Функция конструктор. Нужна для конструирования обьектов и создания множества подобных копий
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello  ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} в здании`)
    }
}

let John = new User('John', 25),
    Pol = new User('Pol', 20);

console.log(John);
console.log(Pol);
console.log(John.hello());
console.log(Pol.hello());
console.log(John.exit());
console.log(Pol.exit());
