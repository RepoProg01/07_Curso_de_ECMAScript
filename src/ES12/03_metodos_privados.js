class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return "hello";
    };
    greeting(){
        return `${this.speak()} ${this.name}`
    };

    get gvarAge(){
        return this.age;
    };

    set svarAge(ageVal){
        this.age = ageVal;
    }
}

const user1 = new User("David", 15);
user1.svarAge = 20;
console.log(user1.gvarAge);

// console.log(user1.greeting());