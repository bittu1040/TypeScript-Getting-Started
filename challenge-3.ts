/*
 Challenge 3: Encapsulation
  * Use the classes below
  * Add an appropriate readonly property to the User class
  * Be explicit with your public properties of User class
  * Add an appropriate protected property in User and access it with a private method in Admin

export class User{
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string){
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
    }

    get fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }

    doesEmailMatch(email: string): boolean{
        return this.email=== email;
    }
}

export class Admin extends User{
    constructor(firstName: string, lastName: string, email: string){
        super(firstName, lastName, email)
        this.firstName=firstName;
        this.lastName= lastName;
        this.email= email;
    }
}

*/

export class User{
    public readonly id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    protected dob: Date;

    constructor(id: string, firstName: string, lastName: string, email: string, dob: Date){
        this.id= id;
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.dob= dob;
    }

    public get fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }

    public doesEmailMatch(email: string): boolean{
        return this.email=== email;
    }
}

export class Admin extends User{
    public yearBorn: number;
    constructor(id: string, firstName: string, lastName: string, email: string, dob: Date){
        super(id, firstName, lastName, email, dob)
        this.firstName=firstName;
        this.lastName= lastName;
        this.email= email;
        this.yearBorn= this.getYear();
    }

    private getYear():number{
       return this.dob.getFullYear();
    }
}

