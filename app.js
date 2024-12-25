// 1-masala

const input = { abc: 1, 123: 2, d: 5 };

function defineObject(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] - 0 == keys[i]) {
      return false;
    }
  }
  return true;
}

console.log(defineObject(input));

// 2-masala
const input1 = { a: false, b: 12, c: true, d: 0 };

function removeFalsyValues(obj) {
  const result = {};

  for (let key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(removeFalsyValues(input1));

// 3-masala

const obj1 = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];

function countOccurrences(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (result[num]) {
      result[num] += 1;
    } else {
      result[num] = 1;
    }
  }

  return result;
}

console.log(countOccurrences(obj1));

// 4-masala

const input2 = 8945472985629;

function splitNumberIntoClasses(num) {
  const result = {};

  result["trilionlar"] = Math.floor(num / 1000000000000);
  result["milliardlar"] = Math.floor((num % 1000000000000) / 1000000000);
  result["millionlar"] = Math.floor((num % 1000000000) / 1000000);
  result["minglar"] = Math.floor((num % 1000000) / 1000);
  result["birlar"] = num % 1000;

  return result;
}

console.log(splitNumberIntoClasses(input2));

// 5-masala

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
  console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${status};`);
}

// 6-masala

const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];

let totalSum = 0;

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const priceAfterDiscount =
    product.price - (product.price * product.discount) / 100;
  const totalProductPrice = priceAfterDiscount * product.quantity;
  totalSum += totalProductPrice;
}

console.log("Summa: " + totalSum);

// 7-masala

const obj = {
  it: 20,
  mushuk: 10,
  sigir: 200,
  tovuq: 2,
};

const result = [];
for (let key in obj) {
  result.push(key, obj[key]);
}

console.log(result);

// 8-masala

const grades = [
  { name: "Fizika", grade: 4, kredit: 6 },
  { name: "Matematika", grade: 5, kredit: 6 },
  { name: "Tarix", grade: 4, kredit: 4 },
  { name: "Dasturlash", grade: 5, kredit: 8 },
  { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
];

let totalGradePoints = 0;
let totalCredits = 0;

for (let i = 0; i < grades.length; i++) {
  totalGradePoints += grades[i].grade * grades[i].kredit;
  totalCredits += grades[i].kredit;
}

const GPA = totalGradePoints / totalCredits;
console.log("GPA: " + GPA.toFixed(2));

// 9-masala

const rightAnswers = {
  1: "B",
  2: "A",
  3: "C",
  4: "D",
  5: "B",
  6: "C",
  7: "A",
  8: "D",
  9: "A",
  10: "B",
};
const myAnswers = {
  1: "C",
  2: "A",
  3: "D",
  4: "D",
  5: "B",
  6: "C",
  7: "B",
  8: "C",
  9: "A",
  10: "C",
};

function checkAnswers() {
  let score = 0;

  for (let question in rightAnswers) {
    if (rightAnswers[question] == myAnswers[question]) {
      score++;
    }
  }

  return score;
}

const totalScore = checkAnswers();
console.log("Total correct answers: " + totalScore);

// 10-masala

const obj2 = { a: 2, b: 3, c: 4, d: 6 };

const n = 3;

function getMultipleValues(n, obj) {
  const res = {};

  for (let key in obj) {
    res[key] = obj[key] * n;
  }

  return res;
}

const res = getMultipleValues(n, obj2);
console.log(res);
