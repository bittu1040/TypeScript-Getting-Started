/*
   readonly modifier is used to mark properties of a class or an interface as immutable. 
   Once a property is marked as readonly, it can only be assigned a value at the time of declaration or within the constructor of the class. 
   After having readOnly property, its value cannot be changed.
*/

class PersonClass{
    readonly name: string;
    readonly birthYear: number;
    age: number;

    constructor(name: string, birthYear: number, age: number) {
        this.name = name;
        this.birthYear = birthYear;
        this.age= age;
    }

    getDetails(): string {
        return `${this.name} was born in ${this.birthYear}.`;
    }
}

const person1 = new PersonClass("Alice", 1990, 23); 
person1.age= 123;
console.log(person1)
console.log(person1.getDetails()); // Output: Alice was born in 1990.

// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
// person.birthYear = 1991; // Error: Cannot assign to 'birthYear' because it is a read-only property.