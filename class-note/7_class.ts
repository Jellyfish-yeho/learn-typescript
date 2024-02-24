class Person {
    private name: string; //변수의 유효범위
    public age: number;
    readonly log: string;

    constructor (name: string, age:number){
        this.name = name;
        this.age = age;
    }
}