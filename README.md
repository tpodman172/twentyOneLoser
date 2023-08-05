# 夏休みの自由研究
- AIを使ってゲームをプログラミングする

# 動機
XXX

# ゴール
XXX

# やったこと

## 1. AIを使ってゲームのソースコードを生成する

### AIにお願いしたこと（ここはお父さんにお願いした）
```
reactでゲームを作りたいです。コードを書いてもらえますか？
以下の仕様です。
- コンピューターとプレイヤーが交互に数字加算します。
- 0からスタートします。
- 1回につき、3まで加算できます。
- 21の数字を言ったほうが負けです。
```

### AIからの回答
```
もちろんです、Reactで簡単なゲームを作成することは可能です。
以下は、あなたの仕様に基づいた基本的なコードの例です。

import React, { useState } from "react";

const Game = () => {
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState("player");

  const handleClick = (value) => {
    if (count + value <= 21) {
      setCount(count + value);
      setTurn(turn === "player" ? "computer" : "player");
    }
  };

  const computerPlay = () => {
    let value = Math.min(3, 21 - count); // Always choose a value that will not make the count exceed 21.
    if (turn === "computer") {
      setTimeout(() => {
        handleClick(value);
      }, 1000);
    }
  };

  computerPlay(); // trigger computer play when it's computer's turn

  return (
      <div className="game">
        <h1>Count: {count}</h1>
        <p>It's {turn}'s turn</p>
        {[1, 2, 3].map((value) => (
            <button
                key={value}
                onClick={() => handleClick(value)}
                disabled={turn === "computer" || count + value > 21}
            >
              Add {value}
            </button>
        ))}
        {count >= 21 && <p>{turn === "player" ? "Computer" : "Player"} loses</p>}
      </div>
  );
};

export default Game;
```

### これを動かしてみた
- https://codesandbox.io/s/wonderful-ioana-swrt5h
- <img src="public/QR_076266.png" alt="https://codesandbox.io/s/wonderful-ioana-swrt5h" width="100" />

## 2. AIが生成したコードを修正する
- [x] コンピューターは必ず3を加算してくる。ランダムな数字を加算するように修正する。 
- [x] ボタンをAdd1,Add2,Add3から+1,+2,+3に変更する。
- [ ] ゲームが終わった後にretry buttonをつける
- [ ] わざと21を選ぶとPlayerの負けになるはずが`Computer loses` と表示されてしまうのを直そう。
- [ ] このゲームは後攻が絶対に勝てるゲーム。最強のComputerを作ろう。
