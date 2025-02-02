/*
    Polymorphism means many forms. 
    In simple terms, it allows one function, method, or class to work differently based on the object using it.
    Different classes have the same method, but each behaves differently.
*/

class Animal {
    makeSound(): void {
        console.log("Some generic animal sound...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}


let dog1 = new Dog();
dog1.makeSound();  // Output: Woof! Woof!


let cat1 = new Cat();
cat1.makeSound();  // Output: Meow! Meow!
