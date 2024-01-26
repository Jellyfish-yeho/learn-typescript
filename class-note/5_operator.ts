function logMessage1(value: any){
    console.log(value)
}
logMessage1('hi!');
logMessage1(100);

//union type
let onew: string | number | boolean;
function logMessage2(value: string | number){
    //type guard : 특정 타입으로 타입 범위를 좁혀나가는(필터링하는) 과정
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage2('hi!');
logMessage2(100);

interface Developer {
    name: string;
    skill : string;
}

interface Person{
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){
    //모든 속성이 아닌 공통 속성만 가져옴. 즉, 타입이 보장된 속성만 가져옴. 
    someone.name;
    // someone.skill; //error
    // someone.age; //error
}
askSomeone({name: '개발자', skill: '웹개발'});
askSomeone({name: 'saram', age: 100});

//intersection type
let taemin: string | number | boolean;
let minho: string & number & boolean; // = never

function askSomeone2(someone: Developer & Person){
    someone.name;
    someone.skill;
    someone.age;
}
// askSomeone2({ name: "개발자", skill: "웹개발" }); //error
// askSomeone2({ name:  "saram", age: 100 }); //error
askSomeone2({ name: "인간", age: 100, skill: "스킬" });
