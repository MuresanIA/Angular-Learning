//Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

let age: number;

age = 28;

let userName: string | string[];

userName = "Alex";

let isAwesome: boolean;

isAwesome = true;

//complex types: array and object types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];


type Person =  {
    name: string;
    age: number;
  };

let person: Person;

person = {
  name: "Alex",
  age: 28,
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;


// Functions & types

function add2(a: number , b: number) { 
    return a + b;
}

function print(value: any){
    console.log(value);
}