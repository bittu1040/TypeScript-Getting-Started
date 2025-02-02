/* 
    Classes in TypeScript
    - Class vs object
    - Constructor and class properties
    - Methods with typeScript
    - Get and Set
*/

/* 
    Inheritance 
    - Extending classes in TypeScript
    - Implementing classes in TypeScript
    - Super()
    - Super() overrides
    - Generics
    - Polymorphism 
*/

/*
    Access modifiers
    - Encapsulation
    - Public vs private
    - Protected
    - Static
    - Readonly
*/


// Example 1
export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string, message: string){
        this.title= title;
        this.message= message;
        this.isSent= false;
    }

    get messageStatus(): string{
        const sentMessage = this.isSent ? 'Has sent.' : ' Has not been sent';
        return ` ${this.message} | ${sentMessage}`
    }

    previewMessage(): string {
        return this.message.slice(0,10).concat('...')
    }
}


const message = new Message("Hello Bittu", "Good morning");

// console.log(message);
// console.log(message.previewMessage());
// console.log(message.messageStatus);

