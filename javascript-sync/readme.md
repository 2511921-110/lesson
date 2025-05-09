# テスト用 API

投稿[https://jsonplaceholder.typicode.com/posts]
ユーザー一覧[https://randomuser.me/api/]
犬の画像[https://dog.ceo/api/breeds/image/random]
エラーハンドリング[https://jsonplaceholder.typicode.com/invalid-endpoint]

## 初級

### JSONPlaceholder の投稿データを取得しよう

- /posts エンドポイントに GET リクエストを送り、最初の投稿のタイトルを console.log で表示してください。

### ユーザー情報を取得しよう

- ランダムなユーザーの名前を取得し、「こんにちは、〇〇さん！」と console.log で表示してください。

### 犬の画像を取得しよう

- ランダムな犬の画像 URL を取得し、console.log で表示してください。

### 簡単なエラーハンドリング

- /invalid-endpoint に fetch を実行し、エラーが発生した場合は "エラーが発生しました" と console.log で表示するコードを書いてください。

## 中級

### 2 つの API を並列で取得しよう

- /users/1 でユーザー情報を取得
- ランダムな犬の画像を取得

**この 2 つを 同時に 取得し、console.log で結果を表示してください。（Promise.all を使うと良いかも？）**

### POST リクエストを送信しよう

- /posts に対して、以下のデータを送信し、成功したら console.log("投稿成功") を表示してください。

```
{
  "title": "Hello Fetch",
  "body": "Fetchの練習をしています",
  "userId": 1
}
```

## 上級

### 3 つの API を順番に実行しよう

- /users/1 で userId を取得
- /posts?userId=1 で投稿リストを取得
- 取得した最初の投稿の id を使い、 /comments?postId=最初の投稿の id でコメントを取得し console.log に表示

```
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/posts?userId=1
https://jsonplaceholder.typicode.com/comments?postId=最初の投稿のid
```
