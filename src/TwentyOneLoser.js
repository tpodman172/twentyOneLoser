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
    let value = Math.min(randomNumber(), 21 - count); // Always choose a value that will not make the count exceed 21.
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

const randomNumber = () => {
  const numbers = [1, 2, 3];
  return numbers[Math.floor(Math.random() * numbers.length)];
};

export default Game;
