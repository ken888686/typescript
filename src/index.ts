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
