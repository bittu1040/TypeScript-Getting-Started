/*
    Encapsulation: Bundles data and methods into a single unit (class) and restricts access uses.
   
    Encapsulation is typically achieved using access modifiers like private, protected, and public.

    private: It's like a secret where only your class knows it.
    protected: It's like a family secret where only your class and its children (subclasses) know it.
    public: It's like public information that anyone can access.

    By default property is public in TypeScript if we don't mention any thing. 

*/

class Person {
    private name: string; // Only accessible within the Person class
    protected age: number; // Accessible within the Person class and its subclasses
    public email: string; // Accessible from anywhere

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    protected getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    private employeeId: number;

    constructor(name: string, age: number, email: string, employeeId: number) {
        super(name, age, email);
        this.employeeId = employeeId;
    }

    public getEmployeeDetails(): string {
        return `Name: ${this.getName()}, Age: ${this.getAge()}, Age: ${this.age},
         Email: ${this.email}, Employee ID: ${this.employeeId}`;
    } 
}

const emp = new Employee("John Doe", 30, "john.doe@example.com", 12345);
console.log(emp.email); // Output: john.doe@example.com
console.log(emp.getEmployeeDetails()); 
// Output: Name: John Doe, Age: 30, Email: john.doe@example.com, Employee ID: 12345

// console.log(emp.name);  // Error