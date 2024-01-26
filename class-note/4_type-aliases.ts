interface Person{
    name: string;
    age: number
}   

type Saram = {
    name:string;
    age: number;
};

var harry:Person = {
    name: "해리",
    age: 10,
}
var Ron: Saram = {
    name: "론",
    age: 10,
};

type MyString = string;
var str: MyString = 'hello';

type ToDo = {id: number; title: string; done: boolean}
function getTodo (todo: ToDo){
    
}