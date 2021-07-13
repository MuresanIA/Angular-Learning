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

type Person = {
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

let course: string | number = "React - The Complete Guide";

course = 12341;

// Functions & types

function add2(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); // [-1 ,1 ,2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Alex", "Cool", 28, ["Angular"]);
student.enrol("React");

student.listCourses(); // Angular, React

// student.courses => Angular, React
