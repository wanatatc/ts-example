// A. การประกาศตัวแปร และ ชนิดตัวแปร (Type)

/**
 * primitives types
 * ตัวแปรที่เก็บข้อมูลชนิดพื้นฐาน
 */

// 1. string
// let userName: string = "John Doe";
// console.log(userName);

// // 2. number
// let age: number = 30;
// console.log(age);

// // 3. boolean
// let isSingle: boolean = true;
// console.log(isSingle);

/**
 * Arrays
 */

// let hobbies: string[] = ["Sports", "Cooking"];
// console.log("hobbies:", hobbies);

// let scores: number[] = [100, 200, 300];
// console.log("scores:", scores);

// let isMarrieds: boolean[] = [true, false, true];
// console.log("isMarrieds:", isMarrieds);

/**
 * any
 * ใช้กำหนดชนิดข้อมูลให้กับตัวแปรที่ไม่ต้องการกำหนดชนิดข้อมูล
 * *** คำเตือน : ไม่ควรใช้ any ในการประกาศตัวแปรเพราะจะเป็นการลดความปลอดภัยของโปรแกรม
 */

// let anyType: any = "John Doe";
// console.log("anyType:", anyType);

// anyType = 30;
// console.log("anyType:", anyType);

/**
 * Object
 * ใช้กำหนดชนิดข้อมูลให้กับตัวแปรที่เป็น Object ซึ่งใช้อ้างอิงถึงค่าใดๆ ใน JavaScript ด้วย property ได้
 */

// let person = {
//   name: "John Doe",
//   age: 30,
//   isSingle: true,
//   hobbies: ["Sports", "Cooking"],
// };

// person.name = "Jane Doe";
// person = {...person, age: 40};

// console.log("person", person);

// let {isSingle} = person;

// console.log("isSingle", isSingle);

// B. การกำหนดชนิดโดยค่า (Type Inference)

// let firstName = "John";
// console.log("firstName:", firstName);

// let lastName = "Doe";
// console.log("lastName:", lastName);

// let isMarried = false;
// console.log("isMarried:", isMarried);

// let numberOfChildren = 0;
// console.log("numberOfChildren:", numberOfChildren);

// C. ใช้งานกับฟังก์ชันและพารามิเตอร์

/**
 * การประกาศฟังก์ชัน
 * @param a ตัวแปรที่ 1 ที่รับค่าเป็น number
 * @param b ตัวแปรที่ 2 ที่รับค่าเป็น number
 * @returns ค่าผลลัพธ์ที่ได้จากการบวก a + b ที่เป็น number
 *
 * การ return ค่า ของฟังก์ชัน ไม่จำเป็นต้องมี การกำหนดชนิดข้อมูล ก็ได้
 */

// function add(a: number, b: number) {
//   // function add(a: number, b: number) : number {
//   return a + b;
// }

// console.log("add(10, 20)", add(10, 20));

// D. การประกาศชนิดข้อมูล (Interfaces and type annotations)

// interface Person {
//     name: string;
//     age: number;
//     isSingle: boolean;
//     hobbies: string[];
// }

// let person: Person = {
//     name: "John Doe",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
// };

// console.log("person", person);

// type Person = {
//     name: string;
//     age: number;
//     isSingle: boolean;
//     hobbies: string[];
// };

// let person: Person = {
//     name: "John Doe",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
// };

/**
 * การประกาศ Function Type
 *
 * ใช้กำหนดชนิดข้อมูลฟังก์ชัน โดยใช้เครื่องหมาย => (arrow function) คั่นระหว่างพารามิเตอร์และค่าผลลัพธ์
 */

// type Add = (a: number, b: number) => number;
// let add: Add = (a: number, b: number) => a + b;

// console.log("add(10, 20)", add(10, 20));

// type Car = {
//   brand: string;
//   drive: () => void;
//   fuelPrice: (price: number) => number;
// };

// let car: Car = {
//   brand: "Toyota",
//   drive: () => console.log("🚗"),
//   fuelPrice: (price: number) => price * 1.5,
// };

// car.drive();
// console.log("car.fuelPrice(100)", car.fuelPrice(100));

/**
 * การประกาศ Index Signature
 *
 * เป็นประโยชน์สำหรับการกำหนดชนิดข้อมูลให้กับ Object ที่มี property ที่ไม่ทราบชื่อล่วงหน้า
 * โดยใช้เครื่องหมาย [] (square brackets) ครอบชื่อ property ที่ไม่ทราบชื่อไว้
 */

// type PersonData = {
//   [key: number]: string;
// };

// let personData: PersonData = {
//   1: "John Doe",
//   2: "Jane Doe",
// };

// console.log("personData", personData);
// console.log("personData[1]", personData[1]);

// type AnimalData = {
//   [key: string]: string;
//   name: string;
// };

// let animalData: AnimalData = {
//   //name: "Cat",
//   color: "Black",
// };

// console.log("animalData", animalData);
// console.log("animalData.name", animalData.name);
// console.log("animalData.color", animalData.color);

// E. Union และ Intersect types

/**
 * ตัวแปรที่มีมากกว่า 1 ชนิดข้อมูล (Union Types)
 *
 * ใช้กำหนดชนิดข้อมูลให้กับตัวแปรที่มีมากกว่า 1 ชนิดข้อมูล โดยใช้เครื่องหมาย | (pipe) คั่นระหว่างชนิดข้อมูล
 * หรือ ตัวแปรที่เป็น string หรือ number หรือ undifined เขียนได้ดังนี้ string | number | undifined
 */

// let mixedUndefined: string | number | boolean | undefined = undefined;

// console.log("mixedUndefined", mixedUndefined);

// mixedUndefined = "John Doe";

// console.log("mixedUndefined", mixedUndefined);

/**
 * การรวมชนิดข้อมูล (Intersect Types)
 *
 * ใช้รวมชนิดข้อมูลที่มีมากกว่า 1 ชนิดข้อมูลเข้าไว้ด้วยกัน โดยใช้เครื่องหมาย & (ampersand) คั่นระหว่างชนิดข้อมูล
 */

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   id: number;
//   department: string;
// }

// type Person = {
//     name: string;
//     age: number;
// };

// type Employee = {
//     id: number;
//     department: string;
// };

// interface PersonEmployee = Person & Employee;

// let personEmployee: PersonEmployee = {
//     name: "John Doe",
//     age: 30,
//     id: 1,
//     department: "IT",
// };

// console.log("personEmployee:", personEmployee)

// F. การอ้างอิง Type (Type Aliases)

/**
 * การอ้างอิง Type (Type Aliases)
 *
 * ใช้กำหนดชนิดข้อมูลให้กับตัวแปร จาก type ที่เรากำหนดไว้
 */

// type ID = number;

// type Name = string;

// type Person = {
//   id: ID;
//   name: Name;
//   age: number;
// };

// let person: Person = {
//   id: 1,
//   name: "John Doe",
//   age: 30,
// };

// console.log("person", person);

// type Point = {
//   x: number;
//   y: number;
// };

// type Rectangle = {
//   topLeft: Point;
//   bottomRight: Point;
// };

// const rectangle: Rectangle = {
//   topLeft: {x: 0, y: 0},
//   bottomRight: {x: 100, y: 100},
// };

// console.log("rectangle", rectangle);
