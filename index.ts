// A. คำแทนค่า (Enums)

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Up = 0, Down = 1, Left = 2, Right = 3
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// // Up = 1, Down = 2, Left = 3, Right = 4
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }

// const value = Direction.Up;
// console.log("value:", value);

// B. การระบุชนิดข้อมูล (Type assertions)
/**
 * บางครั้ง เราอาจมีข้อมูลบางอย่าง ที่ TypeScript ไม่สามารถรู้จักชนิดข้อมูลได้ แต่เราอยากบอก TypeScript ว่า ข้อมูลนี้เป็นชนิดอะไร
 * ในกรณีนี้ เราสามารถใช้ Type assertions ได้ โดยใช้เครื่องหมาย <ชนิดข้อมูล> หรือ ชื่อชนิดข้อมูล as นำหน้าข้อมูลที่ต้องการระบุชนิด
 *
 * ** คำเตือน: การใช้ Type assertions อาจทำให้เกิดข้อผิดพลาดได้ ถ้าเราระบุชนิดข้อมูลผิด หรือ ระบุชนิดข้อมูลที่ไม่ถูกต้อง
 *            ควรใช้ในกรณีที่เรามั่นใจว่า ข้อมูลที่เราต้องการระบุชนิด จะเป็นชนิดนั้นแน่นอน
 */

// const myCanvas = document.getElementById("main_canvas"); // จะได้ประเภท HTMLElement
// const main = document.getElementById("main") as HTMLDivElement; // ระบุประเภทว่า เป็น div element

// let testNumber: any = "123";
// let testParsedNumber = parseInt(testNumber as string);

// Using type assertion to tell TypeScript that myParsedNumber is a string
// let myStringNumber = testParsedNumber as string; // myStringNumber is of type 'string'

// console.log(typeof myStringNumber); // Output: string

// C. การเช็คชนิดข้อมูล (Type guards)

/**
 * การเช็คชนิดข้อมูล สามารถทำได้ เมื่อ ตัวแปร หรือ object ที่เราต้องการเช็ค มีชนิดข้อมูลที่เป็น union type
 * โดยใช้ typeof, instanceof, in หรือ ค่าตรรกศาสตร์ (truthiness)
 */

// 1. typeof

/**
 * ใช้เช็คชนิดข้อมูล โดยใช้ typeof กับชนิดข้อมูลที่เป็น primitive type
 */

function processValue(value: string | number) {
  if (typeof value === "string") {
    // หากค่า value เป็น string
    console.log(value.toUpperCase());
  } else {
    // ถ้าไม่ใช่ string ให้ดำเนินการต่อโดยใช้ค่าเป็น number
    console.log(value.toFixed(2));
  }
}

// 2. instanceof // ใช้กับ class หรือ interface -- ละไว้ เพราะไม่ได้ใช้ class

// 3. in

/**
 * ใช้เช็คว่า property นั้นมีอยู่ใน object หรือไม่
 */

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    // ถ้ามี property swim ใน animal
    return animal.swim();
  }

  return animal.fly();
}

let animal: Fish = {
  swim: () => {
    console.log("swim swim swim");
  },
};

move(animal);

// 4. User-defined type guards

/**
 * หากต้องการเช็ค type ที่เราสร้างเอง ให้ทำการสร้างฟังก์ชันสำหรับเช็คชนิดข้อมูลนั้น
 */

type Person = {
  name: string;
  age: number;
};

function isPerson(obj: any): obj is Person {
  return obj.name !== undefined && obj.age !== undefined;
}

function printPersonInfo(obj: Person | string) {
  if (isPerson(obj)) {
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
  } else {
    console.log(obj);
  }
}

printPersonInfo({name: "John", age: 20});
printPersonInfo("Hello world");

// D. Nullable types and optional properties

/**
 * การกำหนดให้ตัวแปร หรือ property ของ object มีค่า null ได้
 * สามารถทำได้โดยใช้ union type ระหว่างชนิดข้อมูลที่ต้องการกำหนด และค่า null
 */

let myNumber: number | null = 10;

type MyObject = {
  name: string;
  age: number;
  address: string | null;
};

let myObject1: MyObject = {
  name: "John",
  age: 20,
  address: null,
};

// กรณีที่ต้องการกำหนดให้ property ของ object ไม่บังคับต้องมีค่า สามารถใช้ ? นำหน้าชื่อ property ได้
// โดยเมื่อไม่มีค่า จะเป็น undefined

type MyObject2 = {
  name: string;
  age: number;
  address?: string; // address: string | undefined
};

let myObject2: MyObject2 = {
  name: "John",
  age: 20,
};
console.log("myObject:", myObject2);
console.log("myObject.address:", myObject2.address);
