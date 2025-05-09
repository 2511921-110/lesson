const a = { a: "a" };
const b = { b: "b" };

const c = Object.assign(a, b);
// console.log(c);

const arry = ["aa", "bb", "cc", "dd", "ee", "ff", "gg"];
const newArry = arry.slice(-4, -1);
// console.log(newArry);

// const holidays = "https://holidays-jp.github.io/api/v1/date.json";
// fetch("https://holidays-jp.github.io/api/v1/date.json")
//   .then((data) => data.text())
//   .then((res) => console.log(res));

// ここを追加
// console.log("done");

const arry01 = [
  { name: "伊藤", age: "b", address: "c", gender: "d" },
  { name: "山村", age: "b", address: "c", gender: "d" },
  { name: "a", age: "b", address: "c", gender: "d" },
  { name: "a", age: "b", address: "c", gender: "d" }
];
// arry01.forEach((el) => {
//   if (age) {
//     console.log("お名前は" + el[v]);
//   }
// });
console.log(arry01["gender"]);
// arry01.forEach(function (elem, i) {
//   console.log(elem + "[" + i + "]");
// });
