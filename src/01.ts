export function sum(a: number, b: number) {
  return a + b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export function spliter(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => w.replace("!", ""))
    .filter((e) => e !== "");
}

const obj = {
  name: [
    {
      firstName: "Dima",
    },
    { lastName: "Smirnov" },
  ],
};
