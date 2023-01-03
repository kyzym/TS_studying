export {};

type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Exclude<"a" | "b" | "c", "b" | "a" | "n">;
type T2 = Exclude<string | number | (() => void), Function>;

type Status = "success" | "clientError" | "serverError" | 200 | 401 | 504;

type NumericStatus = Exclude<Status, string>;

type TextStatus = Exclude<Status, number>;

type T00 = Extract<"a" | "b" | "c", "a">;
type T10 = Extract<"a" | "b" | "c", "b" | "a" | "n">;
type T20 = Extract<string | number | (() => void), Function>;

interface Person {
  age: number;
  firstName: "string";
  lastName: "string";
  sex: "male" | "female";
  country: string;
  skills: string[];
}

type PersonName = Extract<keyof Person, "firstName">;

type NoCountryPerson = Exclude<keyof Person, "country">;

type T01 = NonNullable<string | number | undefined>;

type T11 = NonNullable<string[] | null | undefined>;

type Computer = {
  brand: string;
  year: number;
  isAvailable: boolean;
};

type T011 = Exclude<keyof Computer, string>;
type T021 = Extract<keyof Computer, string>;
