// class challenge
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
