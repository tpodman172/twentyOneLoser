import React, {useState} from "react";

const Game = () => {
    const [count, setCount] = useState(0);
    const [turn, setTurn] = useState("player");

    const handleClick = (value) => {
        if (count + value <= 21) {
            setCount(count + value);
            setTurn(turn === "player" ? "computer" : "player");
        }
    };

    const handleRetry = () => {
        setCount(0);
    }

    const computerPlay = () => {
        let value = Math.min(randomNumber(), 21 - count); // Always choose a value that will not make the count exceed 21.
        if (turn === "computer" && count !== 21) {
            setTimeout(() => {
                handleClick(value);
            }, 1000);
        }
    };

    computerPlay(); // trigger computer play when it's computer's turn
    // 三項演算子
    return (
        <div className="game">
            <h1>いまのすうじ : {count}</h1>
            <p> {turn === 'computer' ? 'コンピュータ' : 'プレイヤー'}の番 </p>
            {[1, 2, 3].map((value) => (
                <button
                    key={value}
                    onClick={() => handleClick(value)}
                    disabled={turn === "computer" || count + value > 21}
                >
                    + {value}
                </button>
            ))}
            {count >= 21 && <p>{turn === "player" ? "コンピュータ" : "プレイヤー"} の負け</p>}
            <div>
                <button
                    onClick={() => handleRetry()}
                    disabled={count !== 21}
                >
                    リトライ
                </button>
            </div>
        </div>
    );
};

const randomNumber = () => {
    const numbers = [1, 2, 3];
    return numbers[Math.floor(Math.random() * numbers.length)];
};

export default Game;
