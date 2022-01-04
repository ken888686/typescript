function func1(a: string, b: string) {
  return a + b;
}

function func2(a: string, b: string): number {
  return (a + b).length;
}

function func3(score: number, name: string, isPassed: boolean) {
  return `${name} scored ${score} points and ${isPassed ? "passed" : "failed"}`;
}

function test(a: number) {
  console.log(a);
}

function func4(name: string, age?: number) {
  if (!age) {
    return -1;
  }

  let a: number = age;
  test(age);
  return `${name} is ${age} years old`;
}
