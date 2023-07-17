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
// console.log("🚀 ~ file: index.ts:9 ~ value:", value);

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

// C. การเช็คชนิดข้อมูล (Type guards)

/**
 * การเช็คชนิดข้อมูล สามารถทำได้ เมื่อ ตัวแปร หรือ object ที่เราต้องการเช็ค มีชนิดข้อมูลที่เป็น union type
 * โดยใช้ typeof, instanceof, in หรือ ค่าตรรกศาสตร์ (truthiness)
 */

// 1. ค่าตรรกศาสตร์ (truthiness)

/**
 * หากค่าเป็น :
 *     0
 *     NaN
 *     "" (the empty string)
 *     0n (the bigint version of zero)
 *     null
 *     undefined
 *
 * จะถูกเป็นค่าเท็จ (falsy) ทั้งหมด
 */

const numUsersOnline = 0;

if (numUsersOnline) {
  console.log(`There are ${numUsersOnline} online now!`);
} else {
  console.log("Nobody's here. :(");
}

const textInput = "";

if (textInput) {
  console.log(`You entered: ${textInput}`);
} else {
  console.log("You didn't enter anything.");
}

// D. Nullable types and optional properties
// E. Type narrowing
