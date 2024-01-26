interface User {
    age: number;
    name: string;
}

//변수에 인터페이스 활용
const onew: User = {
    age: 10,
    name: '온유'
};

//함수에 인터페이스 활용
function getUser (user: User){
    console.log(user);
}
const taemin = {
    age: 10,
    name: '태민'
}
getUser(taemin);

//함수의 스펙(구조)에 인터페이스 활용
interface SumFunction{
    (a: number, b: number): number;
}
let sum: SumFunction;
sum = function(a:number, b:number): number{
    return a + b;
}

//인덱싱
interface StringArray {
    [index: number]: string;
}
const arr: StringArray = ['a', 'b', 'c']
// arr[0] //a
// arr[0] = 10; //error!

//딕셔너리 패턴
interface StringRegexDictionary{
    [key:string]: RegExp; //정규표현식 생성자
}
const obj: StringRegexDictionary = {
    // sth: /abc/, 
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = 'a'; //error!
Object.keys(obj).forEach(function( value ){}) //value의 타입 확인 가능

//인터페이스 확장 (상속)
interface Person{
    name: string;
    age: number;
}
interface Developer extends Person{
    language: string;
}
const minho: Developer = {
    language: 'java',
    name: '민호',
    age: 10,
}