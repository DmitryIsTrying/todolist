import { mult, spliter, sum } from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});

test("sum should be correct", () => {
  //action
  const result1 = sum(a, b);
  b += 3;
  const result2 = sum(b, c);

  //expect result

  expect(result1).toBe(3);
  expect(result2).toBe(8);
});

test("multiply should be correct", () => {
  //action
  const result1 = mult(a, b);
  const result2 = mult(b, c);

  //expect result

  expect(result1).toBe(2);
  expect(result2).toBe(6);
});

test("splitting into words should be correct", () => {
  //data
  const a = "Hello my friend";
  const b = "Goodbuy         guys      !     !";
  const c = "Make an appointment";

  //action
  const result1 = spliter(a);
  const result2 = spliter(b);
  const result3 = spliter(c);

  //expect result

  expect(result1.length).toBe(3);
  expect(result1[0]).toBe("hello");
  expect(result1[1]).toBe("my");
  expect(result1[2]).toBe("friend");
  expect(result2).toEqual(["goodbuy", "guys"]);
  expect(result3).toEqual(["make", "an", "appointment"]);
});
