// // あなた: URLからデータを取得してきてresponseに代入！
// let reponse = fetch("https://jsonplaceholder.typicode.com/posts");
// // あなた: 取得したデータをJSで利用しやすい形に変換！
// response = response.json();

// // あなた: よし！　これで、変換したデータを使って処理ができるぞ！
// console.log(response);

// あなた: URLからデータを取得してきてresponseに代入！
// let reponse = fetch("https://jsonplaceholder.typicode.com/posts");
// fetchさん: いま、通信中だよ〜！　取得できるまでもうちょっと待ってね！

// あなた: 取得したデータをJSで利用しやすい形に変換！
// response = response.json();
// JavaScriptさん: エラー発生! reponseにデータが入ってないよ？
// fetchさん: まだ、通信中だよ〜！

// １秒後...

// fetchさん: 通信おわったよ〜！ 取得したデータをresponseに入れたから確認してね！
// JavaScriptさん: 遅いよ〜！ もうエラー出しちゃったよ。

// あなた: （へんじがない。ただの　しかばね　のようだ。）
// console.log(response);

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].title));

// fetch("https://randomuser.me/api/")
//   .then((response) => response.json())
//   .then((data) =>
//     console.log(`こんにちは、${data.results[0].name.first}さん！`)
//   );

// console.log(imgtar);
// imgtar.createElement("img");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    const imgtar = document.getElementById("imgtar");
    let img_el = document.createElement("img");
    img_el.src = data["message"];
    imgtar.appendChild(img_el);
  });
// .then((data) => console.log(data["message"]));
// .then((data) => console.log(JSON.stringify(data)));
// .then((data) => console.log(JSON.stringify(data["message"])));
// .then((data) => console.table(`${data}`));
// .then((data) => console.dir(`${data}`));
// .then((data) => console.log(`${data}`));
