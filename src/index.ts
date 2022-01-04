function print<T>(data: T) {
  console.log("data:", data);
}

print<string>("Aaron");
print<number>(10);
print<boolean>(true);

class Print<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}
const p1 = new Print<number>(10);
console.log("p1:", p1);
const p2 = new Print<string>("Aaron");
console.log("p2:", p2);
