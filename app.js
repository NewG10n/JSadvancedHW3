"use strict";

// Task 1
const clients1 = [
  "Гилберт",
  "Сальваторе",
  "Пирс",
  "Соммерс",
  "Форбс",
  "Донован",
  "Беннет",
];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

function mergeClients(clientsData1, clientsData2) {
  return [...new Set([...clientsData1, ...clientsData2])];
}

console.log("Task 1: ", mergeClients(clients1, clients2));

// Task 2
const characters = [
  {
    name: "Елена",
    lastName: "Гилберт",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Кэролайн",
    lastName: "Форбс",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Аларик",
    lastName: "Зальцман",
    age: 31,
    gender: "man",
    status: "human",
  },
  {
    name: "Дэймон",
    lastName: "Сальваторе",
    age: 156,
    gender: "man",
    status: "vampire",
  },
  {
    name: "Ребекка",
    lastName: "Майклсон",
    age: 1089,
    gender: "woman",
    status: "vempire",
  },
  {
    name: "Клаус",
    lastName: "Майклсон",
    age: 1093,
    gender: "man",
    status: "vampire",
  },
];

function getShortInfo(array) {
  return array.map(({ name, lastName, age }) => {
    return { name: name, lastName: lastName, age: age };
  });
}

console.log("Task 2: ", getShortInfo(characters));

// Task 3
const user1 = {
  name: "John",
  years: 30,
};

const { name, years, isAdmin = false } = user1;

console.log("Task 3: ", name, years, isAdmin);

// Task 4
const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};

function getFullProfile(data2018, data2019, data2020) {
  return { ...data2018, ...data2019, ...data2020 };
}

console.log("Task 4: ", getFullProfile(satoshi2018, satoshi2019, satoshi2020));

// Task 5

const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};

function updateBooksList(list, book) {
  return [...list, book];
}

console.log("Task 5: ", updateBooksList(books, bookToAdd));

// Task 6
const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

function updateEmployee(employeeData, age, salary) {
  return { ...employeeData, age: age, salary: salary };
}

console.log("Task 6: ", updateEmployee(employee, 42, 100000));

// Task 7
const array = ["value", () => "showValue"];

const [value, showValue] = array;

alert(value); // має бути виведено 'value'
alert(showValue()); // має бути виведено 'showValue'
