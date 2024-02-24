// ES2015(ES6)

function Person (name, age){
    this.name = name;
    this.age = age;
}
var onew = new Person('온유', 30);


class Person{
    //class logic
    constructor(name, age){ //initialize
        console.log('생성되었습니다.')
        this.name = name
        this.age = age
    }
}

const onew = new Person('온유', 30); // 생성되었습니다. 
console.log(onew);