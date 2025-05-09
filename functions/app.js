// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth();
// const day = today.getDate();
// const weekDay = today.getDay();
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
const weekDay = new Date().getDay();

// console.log(today);
// console.log(year);
// console.log(month + 1 + "月");
// console.log(day);
// console.log(year + "年" + `${month + 1}` + "月" + day + "日");
// console.log(weekDay);

console.log("今年は" + new Date().getFullYear() + "年です");

// // 注意「getMonthは0~11の数値で返します。」
console.log("今月は" + `${new Date().getMonth() + 1}` + "月です");

console.log("今日は" + new Date().getDate() + "日です");

// // 注意「getDay（曜日に使います）は0~6の数値で返します。」
function days() {
  const weekday = ["日", "月", "火", "水", "木", "金", "土"];
  const today = new Date().getDay();
  for (let i = 0; i < weekday.length; i++) {
    const el = weekday[i];
    // console.log(el);
    // console.log(i);
    if (today === i) {
      return el;
    }
  }
}

// days();
console.log("今日は" + days() + "曜日です");

// const hoge = new Date()
//   .toLocaleDateString("ja-JP", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   })
//   .replaceAll("/", "-");

// console.log(hoge);

const hoge = new Date();
console.log(hoge);
// // sv-SEロケール(スウェーデン)はYYYY-MM-DD形式の日付文字列を戻す
const hogehoge = new Date().toLocaleDateString("sv-SE");
// console.log(hogehoge);

const tarDay = document.querySelector(".tar_day");
// let dayEl = document.createElement("p");
// tarDay.appendChild(dayEl).textContent = hogehoge;
// tarDay.appendChild(dayEl).textContent = "今日は" + days() + "曜日です";

// ターゲットの分だけHTMLを書き出す
// const tarDays = document.querySelectorAll(".tar_day");
// for (let i = 0; i < tarDays.length; i++) {
//   let dayArray = document.createElement("p");
//   const el = tarDays[i];
//   el.appendChild(dayArray).textContent = "今日は" + days() + "曜日です";
// }

// ターゲット内に複数のHTMLを指定分だけ書き出す
// for (let i = 0; i < 100; i++) {
//   let dayArray = document.createElement("p");
//   // console.log(dayArray);
//   tarDay.appendChild(dayArray).textContent =
//     "（" + i + "）.今日は" + days() + "曜日です";
// }

// const arry = ["aa", "bb", "cc", "dd", "ee", "ff", "gg"];
// const newArry = arry.slice(6, 7);
// // const newArry = arry.slice(-2, -1);
// console.log(arry);
// console.log(newArry);
