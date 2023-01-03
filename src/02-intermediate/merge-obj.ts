// Product : price, isNew, isSale, title

// Vehicle : wheels, year, brand

// Car: type, model +Product, +Vehicle
export {};

type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = { wheels: number; year: number; brand: string };

type Car = { type: string; model: string } & Product & Vehicle;

const car: Car = {
  brand: "Mazda",
  isNew: false,
  isSale: false,
  model: "3",
  price: 10000,
  title: "MyCar",
  type: "hatchback",
  wheels: 4,
  year: 2019,
};

interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}
const carI: ICar = {
  brand: "Mazda",
  isNew: false,
  isSale: false,
  model: "3",
  price: 10000,
  title: "MyCar",
  type: "hatchback",
  wheels: 4,
  year: 2019,
};
