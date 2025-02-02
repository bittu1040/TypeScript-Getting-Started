/*
   Generics are helpful to convert static typing to a dynamic types. 
   Generics in TypeScript helps you to create flexible and reusable code.
   They allow functions, classes, and interfaces to work with different types.
*/

class Box<T>{
    content: T;
    constructor(content: T){
        this.content= content;
    }

    getContent():T{
        return this.content;
    }
}


const numberBox= new Box<number>(123);
const stringBox= new Box<string>("Hello");