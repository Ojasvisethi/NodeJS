var name = "ojasvi";
var age = 19;
var hobbies = true;

// function summariser(username,userage,userhobbies){
//         return ("My name is " + username + ",age is " + userage + " and the user has hobbies :" + userhobbies);
//     }

// const add = (a,b) => a+b;
// const add = a => a+1;
const add = () => 1+2;

let summariser = (username,userage,userhobbies) =>{
    return ("My name is " + username + ",age is " + userage + " and the user has hobbies :" + userhobbies);
};

console.log(summariser(name,age,hobbies));

const person = {
    name : "ojasvi",
    age: 29,
    // greet : function() {
    //     console.log("Hi, I am " + this.name);
    // }
greet() {
    console.log("Hi, I am " + this.name);
}

}

const hobbie = ['Sports','cooking'];
//  Spread operator 
const copiedhobbies = [...hobbie];
console.log(copiedhobbies);
// rest operator 
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,43));

// destructring 
const person1 = {
    name : "ojasvi",
    age: 29,
    // greet : function() {
    //     console.log("Hi, I am " + this.name);
    // }
    greet() {
        console.log("Hi, I am " + this.name);
    }
}

const {name , age} = person1;
const [hobbie1,hobbie2] = hobbie;