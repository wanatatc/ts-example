// A. การประกาศตัวแปร และ ประเภทตัวแปร (Type)

/**
 * primitives types
 * ตัวแปรที่เก็บข้อมูลประเภทพื้นฐาน
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
// console.log("🚀 ~ file: index.ts:25 ~ hobbies:", hobbies);

// let scores: number[] = [100, 200, 300];
// console.log("🚀 ~ file: index.ts:28 ~ scores:", scores);

// let isMarrieds: boolean[] = [true, false, true];
// console.log("🚀 ~ file: index.ts:31 ~ isMarrieds:", isMarrieds);

/**
 * any
 * ใช้กำหนดประเภทข้อมูลให้กับตัวแปรที่ไม่ต้องการกำหนดประเภทข้อมูล
 * *** คำเตือน : ไม่ควรใช้ any ในการประกาศตัวแปรเพราะจะเป็นการลดความปลอดภัยของโปรแกรม
 */

// let anyType: any = "John Doe";
// console.log("🚀 ~ file: index.ts:40 ~ anyType:", anyType);

// anyType = 30;
// console.log("🚀 ~ file: index.ts:43 ~ anyType:", anyType);

/**
 * Object
 * ใช้กำหนดประเภทข้อมูลให้กับตัวแปรที่เป็น Object ซึ่งใช้อ้างอิงถึงค่าใดๆ ใน JavaScript ด้วย property ได้
 */

// let person = {
//   name: "John Doe",
//   age: 30,
//   isSingle: true,
//   hobbies: ["Sports", "Cooking"],
// };

// person.name = "Jane Doe";
// person = {...person, age: 40};

// console.log("🚀 ~ file: index.ts:58 ~ person", person);

// let {isSingle} = person;

// console.log("🚀 ~ file: index.ts:61 ~ isSingle", isSingle);

// B. การกำหนดประเภทโดยค่า (Type Inference)

// let firstName = "John";
// console.log("🚀 ~ file: index.ts:48 ~ firstName:", firstName);

// let lastName = "Doe";
// console.log("🚀 ~ file: index.ts:51 ~ lastName:", lastName);

// let isMarried = false;
// console.log("🚀 ~ file: index.ts:54 ~ isMarried:", isMarried);

// let numberOfChildren = 0;
// console.log("🚀 ~ file: index.ts:57 ~ numberOfChildren:", numberOfChildren);

// C. ใช้งานกับฟังก์ชันและพารามิเตอร์

/**
 * การประกาศฟังก์ชัน
 * @param a ตัวแปรที่ 1 ที่รับค่าเป็น number
 * @param b ตัวแปรที่ 2 ที่รับค่าเป็น number
 * @returns ค่าผลลัพธ์ที่ได้จากการบวก a + b ที่เป็น number
 *
 * การ return ค่า ของฟังก์ชัน ไม่จำเป็นต้องมี การกำหนดประเภทข้อมูล ก็ได้
 */

// function add(a: number, b: number) {
//   // function add(a: number, b: number) : number {
//   return a + b;
// }

// console.log("🚀 ~ file: index.ts:74 ~ add(10, 20)", add(10, 20));

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

// console.log("🚀 ~ file: index.ts:92 ~ person", person);

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

// E. Union และ Intersect types

/**
 * ตัวแปรที่มีมากกว่า 1 ประเภทข้อมูล (Union Types)
 *
 * ใช้กำหนดประเภทข้อมูลให้กับตัวแปรที่มีมากกว่า 1 ประเภทข้อมูล โดยใช้เครื่องหมาย | (pipe) คั่นระหว่างประเภทข้อมูล
 * หรือ ตัวแปรที่เป็น string หรือ number หรือ undifined เขียนได้ดังนี้ string | number | undifined
 */

// let mixedUndefined: string | number | boolean | undefined = undefined;

// console.log("🚀 ~ file: index.ts:82 ~ mixedUndefined", mixedUndefined);

// mixedUndefined = "John Doe";

// console.log("🚀 ~ file: index.ts:85 ~ mixedUndefined", mixedUndefined);

/**
 * การรวมประเภทข้อมูล (Intersect Types)
 *
 * ใช้รวมประเภทข้อมูลที่มีมากกว่า 1 ประเภทข้อมูลเข้าไว้ด้วยกัน โดยใช้เครื่องหมาย & (ampersand) คั่นระหว่างประเภทข้อมูล
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

// console.log("🚀 ~ file: index.ts:169 ~ personEmployee:", personEmployee)

// F. การอ้างอิง Type (Type Aliases)

/**
 * การอ้างอิง Type (Type Aliases)
 *
 * ใช้กำหนดประเภทข้อมูลให้กับตัวแปร จาก type ที่เรากำหนดไว้
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

// console.log("🚀 ~ file: index.ts:200 ~ person", person);

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

// console.log("🚀 ~ file: index.ts:215 ~ rectangle", rectangle);
