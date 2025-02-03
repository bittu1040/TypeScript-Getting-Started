/*
    Static Members:
    static keyword allows us to define properties and methods that belong to a class itself, not its instance

    - Static members belong to the class, not individual instances.
    - Access them using ClassName.property
*/


// Example 1
class Example {
    static staticProperty: string = "I am static";
  
    static staticMethod() {
      return "This is a static method";
    }
  }
  console.log(Example.staticProperty); // Output: I am static
  console.log(Example.staticMethod()); // Output: This is a static method


  // Example 2

  class MathUtils{
   static square(num: number): number{
        return num*num;
    }
  }
  console.log(MathUtils.square(5));


  // Example 3

  class counter{
    private static count: number= 0;

    static increment(){
        this.count++;
    }

    static getCount(){
        return this.count;
    }
  }

  counter.increment();
  counter.increment();
  console.log(counter.getCount()) // 2

