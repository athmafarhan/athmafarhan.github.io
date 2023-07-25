"use strict";

let test;

let menus = [];

let foods = [
  {
    id: 1,
    date: new Date(),
    type: "food",
    title: "Nasi Goreng Oriental",
    description: "Nasi digoreng bersama bumbu dan telur",
    price: 20000,
    active: true,
  },
  {
    id: 2,
    date: new Date(),
    type: "food",
    title: "Chicken Katsu Bowl",
    description:
      "Ayam goreng katsu dengan saus katsu spesial disajikan dengan nasi hangat",
    price: 20000,
    active: true,
  },
  {
    id: 3,
    date: new Date(),
    type: "food",
    title: "Indomie Telur Kornet",
    description:
      "Ayam goreng katsu dengan saus katsu spesial disajikan dengan nasi hangat",
    price: 20000,
    active: true,
  },
];

let snacks = [
  {
    id: 4,
    date: new Date(),
    type: "snack",
    title: "Kentang Goreng",
    description: "Kentang digoreng",
    price: 15000,
    active: true,
  },
  {
    id: 5,
    date: new Date(),
    type: "snack",
    title: "Dimsum",
    description: "Dimsum isi ayam dan udang",
    price: 15000,
    active: true,
  },
];

let beverages = [
  {
    id: 6,
    date: new Date(),
    type: "beverage",
    title: "Originals",
    description:
      "Kopi yang diracik dengan suhu dingin dicampur susu dengan manis yang unik",
    price: 15000,
    active: true,
  },
  {
    id: 7,
    date: new Date(),
    type: "beverage",
    title: "Creamy",
    description:
      "Kopi yang diracik dengan suhu dingin dicampur susu dengan manis yang creamy",
    price: 15000,
    active: true,
  },
  {
    id: 8,
    date: new Date(),
    type: "beverage",
    title: "Mocha",
    description:
      "Kopi yang diracik dengan suhu dingin dicampur susu dengan hint cokelat",
    price: 15000,
    active: true,
  },
  {
    id: 9,
    date: new Date(),
    type: "beverage",
    title: "Aren",
    description:
      "Kopi yang diracik dengan suhu dingin dicampur susu dengan manis gula aren",
    price: 15000,
    active: true,
  },
  {
    id: 10,
    date: new Date(),
    type: "beverage",
    title: "Jasmine Black Tea",
    description: "Teh hitam melati yang diracik dengan suhu dingin",
    price: 15000,
    active: true,
  },
  {
    id: 11,
    date: new Date(),
    type: "beverage",
    title: "Ocha",
    description: "Teh hijau ocha yang diracik dengan suhu dingin",
    price: 15000,
    active: true,
  },
];

let additionals = [
  {
    id: 12,
    date: new Date(),
    type: "additional",
    title: "Nasi Putih",
    description: "-",
    price: 7000,
    active: true,
  },
  {
    id: 13,
    date: new Date(),
    type: "additional-beverage",
    title: "Lemon",
    description: "-",
    price: 2000,
    active: true,
  },
  {
    id: 14,
    date: new Date(),
    type: "additional-beverage",
    title: "Lime",
    description: "-",
    price: 2000,
    active: true,
  },
  {
    id: 15,
    date: new Date(),
    type: "additional-beverage",
    title: "Honey",
    description: "-",
    price: 2000,
    active: true,
  },
];

menus = [foods, snacks, additionals, beverages];
menus = menus.flat();
console.log(menus);

// class App {
//   #menus = [];
//   constructor() {

//   }
// }

// class Menu {
//   date = new Date();
//   id = (Date.now() + "").slice(-10);
//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//   }
// }

// class Beverage extends Menu {
//   type = "beverage";
//   constructor(title, description) {
//     super(title, description);
//   }
// }
// class Food extends Menu {
//   type = "food";
//   constructor(title, description) {
//     super(title, description);
//   }
// }
// class Snack extends Menu {
//   type = "snack";
//   constructor(title, description) {
//     super(title, description);
//   }
// }
