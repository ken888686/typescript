type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Data1 = {
  userId: number;
  id: number;
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as Data;
  console.log(data);
}
getData();

const data1: Data = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

type Beta = {
  name: string;
};
const beta = data1 as unknown as Beta;
