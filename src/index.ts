let myStr: string = "Aaron";
console.log(myStr);

let num: number = 123;
let isBoolean: boolean = true;
let n: null = null;
let u: undefined = undefined;

// 容易混淆的類型
let test: any;
test = 1;
test = "A";
test = false;
test = undefined;

let arr: string[] = ["a", "b"];
let arr2: string[][] = [
  ["a", "b"],
  ["1", "2"],
];

let tuple: [string, number, boolean] = ["a", 1, false];
let tuple2: [string, number][] = [
  ["a", 1],
  ["1", 2],
];

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}
const streamStatus: LiveStatus = LiveStatus.SUCCESS;

let aaa: number | string | boolean = "a";
aaa = 1;
aaa = "s";
aaa = false;

type A = number | string;
let a1: A = "a";
a1 = 1;
// a1 = false;

interface User {
  name: string;
  age: number;
}

type Card = {
  name: string;
  desc: string;
};

interface Card2 {
  name: string;
  desc: string;
}

interface Card2 {
  age?: number;
}

const obj: Card2 = {
  name: "a",
  desc: "...",
  age: 1,
};
