type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

// A - Partial<Type>

type PartialUser = Partial<User>;

let partialUser1: PartialUser = {
  id: 1,
  name: "John",
};

// B - Record<Keys,Type>

type RecordUser = Record<string, User>;

let recordUser1: RecordUser = {
  mike: {
    id: 1,
    name: "Mike",
    age: 23,
    email: "mike@test.com",
  },
  john: {
    id: 2,
    name: "John",
    age: 25,
    email: "john@test.com",
  },
};

console.log(recordUser1["mike"]);

// C - Pick<Type,Keys>

type PickUser = Pick<User, "id" | "name">;

let pickUser1: PickUser = {
  id: 1,
  name: "John",
  //age: 23,
};

// D - Omit<Type,Keys>

type OmitUser = Omit<User, "id" | "name">;

let omitUser1: OmitUser = {
  age: 23,
  email: "test",
};
