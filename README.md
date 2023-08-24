# 夏休みの自由研究
- AIを使ってゲームプログラミングを体験する

## 動機
- 学校のみんなに楽しんでゲームをして欲しいと思ったから

## 作ったもの
### 「交互に3までの数字を足していき、21にした方が負けのゲーム」
  - computerの強さ：ふつう
    - https://codesandbox.io/s/twenty-one-loser-vgqdvr
  - computerの強さ：神
    - https://codesandbox.io/s/twenty-one-loser-max-computer-c3cfr5 

## やったこと
1. AIにゲームの仕様を伝えてソースコードを生成してもらう（担当：父）
2. そのソースコードを動くようにする（担当：父）
3. ソースコードを修正し振る舞いを変えてみる（担当：ぼく）

### 1. AIにゲームの仕様を伝えてソースコードを生成してもらう（担当：父）

#### AIにお願いしたこと
```
reactでゲームを作りたいです。コードを書いてもらえますか？
以下の仕様です。
- コンピューターとプレイヤーが交互に数字加算します。
- 0からスタートします。
- 1回につき、3まで加算できます。
- 21の数字を言ったほうが負けです。
```

#### AIからの回答
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

### 2. そのソースコードを動くようにする（担当：父）
- CodeSandboxを利用
  - https://codesandbox.io/s/wonderful-ioana-swrt5h
  - <img src="public/QR_076266.png" alt="https://codesandbox.io/s/wonderful-ioana-swrt5h" width="100" />

### 3. そのソースコードを修正し振る舞いを変えてみる（担当：ぼく）
- [x] コンピューターは必ず3を加算してくる。ランダムな数字を加算するように修正する。
  - https://github.com/tpodman172/twentyOneLoser/commit/7699a7a34796bbbaf2589eb64d68a62741831933 
- [x] ボタンをAdd1,Add2,Add3から+1,+2,+3に変更する。
  - https://github.com/tpodman172/twentyOneLoser/commit/7da13011e75709a6d9480f3ffa34a9c582277ea7 
- [x] ゲームが終わった後にretry buttonをつける
  - https://github.com/tpodman172/twentyOneLoser/commit/825048920859bc13b6ba2a1addf4f2d76e24d11a 
- [x] Playerの負けるとなぜか`Computer loses` と表示されてしまうのを直す（ついでに日本語にする）。
  - https://github.com/tpodman172/twentyOneLoser/commit/351dae4573012c4f3db2271c01674cda4f454311 
- [x] このゲームは後攻が絶対に勝てるゲーム。最強のComputerを作ろう。
  - https://github.com/tpodman172/twentyOneLoser/commit/3dd18307366e9d5a78590b66357ce37bcc00d82b 

## 学んだ言葉

### 変数
- 値を入れておく箱
  - 例：[コンピューターが足す数字を変数valueに入れる](https://github.com/tpodman172/twentyOneLoser/commit/3dd18307366e9d5a78590b66357ce37bcc00d82b)

### 関数
- ある処理を実行し、その結果を返すもの
  - 例：[1から3までのrandomな数字を返す関数](https://github.com/tpodman172/twentyOneLoser/commit/7699a7a34796bbbaf2589eb64d68a62741831933)

### if
- その場合にどんな処理をするかを分けるために使用する
  - 例：[その場合にコンピューターが何を足すかを決める](https://github.com/tpodman172/twentyOneLoser/commit/3dd18307366e9d5a78590b66357ce37bcc00d82b)

## 感想
- プログラミングは思っていた倍以上に難しかった
