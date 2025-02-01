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



// Example challenge 2
/*
    Create a User class
    Add a firstName, lastName, and email property
    Add a get to return fullName
    Add a method to check if your email param matches the user's current email.
*/


class User{
    firstName: string
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string){
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
    }

    get fullName():string {
        return this.firstName+ " " + this.lastName;
    }

    checkEmail(email: string): boolean{
        return this.email === email;
    }
}


const user1= new User("Bittu", "Kumar", "Bittu@gmail.com");
console.log(user1.checkEmail("Bittu@gmail.com"));
