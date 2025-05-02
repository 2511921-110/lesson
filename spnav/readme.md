# 手順

- まずは HTML を記述
- 次に CSS を記述

## CSS について

**まずは PC デザイン**

- 大画面（PC サイズ）に必要なものと、不必要なものを調べる
- 不必要なものを「display: none;」で非表示
- 大画面（PC サイズ）で確認する

---

**次に SP デザイン**

- 小画面（SP サイズ）に必要なものと不必要なものを調べる
- 不必要なものを「display: none;」で非表示、必要なものを「display: block;」で表示
- 小画面（SP サイズ）で確認する

## 注意事項

- HTML の中には Javascript が直接記述されている

```
<!-- クリックすると表示される -->
onclick="document.getElementById('nav-sp').style.display = 'block'"

<!-- クリックすると非表示になる -->
onclick="document.getElementById('nav-sp').style.display = 'none'"
```

## ハンバーガーメニューの仕組み

- CSS で初期の表示・非表示を設定する
- HTML に書かれている Javascript で、ボタンをクリックすると表示、非表示を切り替えている
