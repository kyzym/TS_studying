export {};

type WellKnownBrands = "apple" | "acer" | "asus" | "microsoft";

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

// const myBrands: BrandNames = {
//   acer: "be",
//   apple: "good",
//   asus: "good",
//   microsoft: "good",
// };

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type SimpleTodo = Pick<Todo, "id" | "title" | "completed">;

const todo1: SimpleTodo = {
  id: "1",
  title: "learn TS",
  completed: false,
};

type SimpleTodo2 = Omit<Todo, "description" | "createdAt">;

type NewTodo = Pick<Todo, "title" | "description">;
