//========vanila js
function logText(text) {
    console.log(text);
    return text;
}
logText(10); // number 10
logText("hi"); // string hi
logText(true); // boolean true

//=========Generic Type
function logText1<T>(text: T): T {
    console.log(text);
    return text;
}
//호출 시점에 타입을 넘겨줄 수 있음.
logText1("hi"); // ts에서 타입을 자동 추론함
const str = logText1<string>("hi");
str.split("");
const login = logText1<boolean>(true);

//==========function 중복 문제점
function logText2(text: string) {
    console.log(text);
    text.split("").reverse().join("");
    return text;
}
function logNumber(num: number) {
    console.log(num);
    return num;
}
logNumber(10); // number 10
logText2("hi"); // string hi

//=========Union Type
function logText3(text: string | number) {
    console.log(text);
    text.toLocaleString();
    return text;
}
const a = logText3(10);
// a.split(''); //Error
logText3("hi");

//==========Interface 에 Generic 선언하기
interface Dropdown1 {
    value: string;
    selected: boolean;
}
const obj1: Dropdown1 = { value: "abc", selected: false };

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}
const obj2: Dropdown2<string> = { value: "abc", selected: false };

//==========Generic type 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength<string>(["hi", "abc"]);

//==========Generic type 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength1<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength1("a"); //string.length 가능
// logTextLength1(10); // number.length 불가능
logTextLength1({ length: 10 }); //length 속성 있음

//==========Generic type 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");
