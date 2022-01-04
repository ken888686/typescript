interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred" | "aaron";

const cats: Record<CatName, CatInfo> = {
  miffy: {
    age: 10,
    breed: "Persian",
  },
  boris: {
    age: 5,
    breed: "Maine Coon",
  },
  mordred: {
    age: 16,
    breed: "British Shorthair",
  },
  aaron: {
    age: 16,
    breed: "British Shorthair",
  },
};
console.log(cats);

const obj1: Record<string, boolean> = {
  name: true,
  age: false,
};
