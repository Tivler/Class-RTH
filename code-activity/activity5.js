// Question One 

var fruits = {}

fruits.fruitList = [];
console.log(fruits);
fruits.fruitList.push('grape', 'watermelon', 'apple', 'cherry', 'mango');

fruits.displayFruits = () => {
    console.log(fruits.fruitList)
}

console.log(fruits);
fruits.displayFruits();



// Question Two 

const person = {
    name: 'John',
    age: 20,

    // giveInfo() {
    //     alert(`${this.name} is ${this.age}`)
    // }
}

person

// Question Three

class People {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    introduce() {
        console.log(`My name is ${this.firstName} ${this.lastName} and I am ${this.age} year(s) old`);
    }

    discountEligible() {
        if (this.age >= 65) {
            console.log(`${this.firstName} ${this.lastName} is eligible for a senior citizen discount`)
        } else {
            console.log(`${this.firstName} ${this.lastName} is not eligible for a senior citizen discount`)
        }
    }
}

const emma = new People('Emma', 'Reyes', 19);
emma.introduce()
emma.discountEligible()

const john = new People('John', 'Smith', 70);
john.introduce()
john.discountEligible()

// Question Four

class Movie {
    constructor(title, director, writer, releaseDate , rating) {
        this.title = title,
        this.director = director,
        this.writer = writer,
        this.releaseDate = releaseDate,
        this.rating = rating
    }

    trailer() {
        console.log(`${this.title}, written by ${this.writer} and directed by ${this.director} will be released on ${this.releaseDate}.`);
    }

    audience() {
        if (this.rating.toLowerCase() === 'r') {
            console.log(`For the audience above the age of 16`);
        } else if (this.rating.toLowerCase() === 'pg-13') {
            console.log(`For the audience above the age of 13`);
        } else if (this.rating.toLowerCase() === 'pg') {
            console.log(`Parental guidance suggested`);
        } else {
            console.log(`For general audiences`)
        }
    }
}

const scream = new Movie('Scream' , 'Thomas' , 'Emma', 'Feb 12th 2020' , 'PG-13');
scream.trailer();
scream.audience();