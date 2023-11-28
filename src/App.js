import { useState, useEffect } from "react";
import "./App.css";
import Square from "./Square";
import { patterns } from "./patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [count, setCount] = useState(0);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (square === idx && val === "" && !winner) {
          setCount(count + 1);
          return player;
        }
        return val;
      })
    );
  };

  const notContains = (br, pat) => {
    return br[pat[0]] !== "" || br[pat[1]] !== "" || br[pat[2]] !== "";
  };
  const checkWiner = () => {
    patterns.forEach((pattern) => {
      if (
        notContains(board, pattern) &&
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[1]] === board[pattern[2]]
      ) {
        const player = board[pattern[0]];
        console.log(player + " is the winner");
        setWinner(player);
      }
    });
  };

  useEffect(() => {
    checkWiner();
    count % 2 === 0 ? setPlayer("X") : setPlayer("O");
  }, [count]);

  return (
    <div className="container">
      <p className="para">{`Player's ${player} turn `}</p>
      {winner && (
        <p
          className="para"
          style={{ color: "#ff0000d1" }}
        >{`${winner} Is The Winner`}</p>
      )}
      {winner && (
        <button
          onClick={() => {
            setBoard(["", "", "", "", "", "", "", "", ""]);
            setPlayer("");
            setCount(0);
            setWinner("");
          }}
        >
          {" "}
          Play Again !
        </button>
      )}
      <div className="App">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
