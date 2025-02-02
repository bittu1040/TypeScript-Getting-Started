// Base / Parent class

/*
𝗲𝘅𝘁𝗲𝗻𝗱𝘀 is used to create a new class (child class) from an existing class (parent class). The child class inherits properties and methods from the parent class.
extends creates a subclass that inherits from a parent class, and instances of the subclass are also instances of the parent class.

𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝘀 is used to make sure a class follows a specific structure defined by an interface. The class must have all the properties and methods that the interface describes.
implements ensures a class follows the structure of an interface, but instances of the class are not instances of the interface or any base class unless explicitly extended.
*/

export class Animal{
    name: string;
    age: number;
    legs: number;

    constructor(name: string, age: number, legs: number){
        this.name= name;
        this.age= age;
        this.legs= legs;
    }

    getDetails(){
        return this.name+ " " + this.age + " " + this.legs;
    }
}


export class Dog extends Animal{
    category: string;
    constructor(name: string, age: number, legs: number, category: string){
        super(name, age, legs);
        this.category= category;
    }
    woof():string{
        return "Woof! Woof! Woof!";
    }

}

const dog1 = new Dog("abc", 10, 4, "unknown");
console.log(dog1.name);
console.log(dog1.woof())

export class Cat implements Animal{
    name: string;
    age: number;
    legs: number;
    color: string;

    constructor(name: string, age: number, legs: number, color: string){
        this.name= name;
        this.age= age;
        this.legs= legs;
        this.color= color;
    }

    getDetails() {
        return ""

    }
}


const cat1= new Cat('mmm1', 12, 4, 'black');
console.log(cat1);

console.log(cat1 instanceof Animal); 
console.log(dog1 instanceof Animal); 

