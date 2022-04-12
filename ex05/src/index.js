class Microsoft {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
        return this._name;
    }
    occupation() {
        return `${this._name} is a philantropist!`;
    }
}

class Facebook extends Microsoft {
    constructor(name, age){
        super(name);
        this._age = age;
    }
    studenAge(){
        return `${this._name} is ${this._age}`;
    }
}

let henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());
let elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(elliot.occupation());
console.log(elliot.studenAge());

module.exports = {
    Microsoft,
    Facebook
}