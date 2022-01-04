interface CarProps {
  name: string;
  age: number;
  start: () => void;
}

class Car implements CarProps {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  start() {
    console.log(`${this.name} is starting`);
  }
}
