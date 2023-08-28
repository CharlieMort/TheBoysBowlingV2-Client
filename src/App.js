import catPic from "./catpic.jpg";
import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";

const endpoint = "http://localhost:8000";

function App() {
  const [playerRanks, setPlayerRanks] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(endpoint + "/players")
      .then((res) => {
        console.log(res.data);
        setPlayerRanks(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
    axios.get(endpoint + "/scores/name")
      .then((res) => {
        console.log(res.data);
        setGames(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  if (games.length == 0) return;

  return (
    <div className="App">
      <div className="title">
        <div className="bowlingBall">
          <div className="hole1"></div>
          <div className="hole2"></div>
          <div className="hole3"></div>
        </div>
        <div className="titleText">
          <h1>The</h1>
          <h1>Boys</h1>
          <h1>Bowling</h1>
        </div>
      </div>
      <div className="ranks">
        <div className="rankings">
          <div className="podiums">
            <div className="podiumParent">
              <p>{playerRanks[1].name}</p>
              <div className="podium p2">
                <p>{playerRanks[1].totalScore}</p>
              </div>
            </div>
            <div className="podiumParent">
              <p>{playerRanks[0].name}</p>
              <div className="podium p1">
                <p>{playerRanks[0].totalScore}</p>
              </div>
            </div>
            <div className="podiumParent">
              <p>{playerRanks[2].name}</p>
              <div className="podium p3">
                <p>{playerRanks[2].totalScore}</p>
              </div>
            </div>
          </div>
          <h1>Highest Overall Score</h1>
        </div>
        <div className="rankings">
          <div className="podiums">
            <div className="podiumParent">
              <p>{games[1].name}</p>
              <div className="podium p2">
                <p>{games[1].totalScore}</p>
              </div>
            </div>
            <div className="podiumParent">
              <p>{games[0].name}</p>
              <div className="podium p1">
                <p>{games[0].totalScore}</p>
              </div>
            </div>
            <div className="podiumParent">
              <p>{games[2].name}</p>
              <div className="podium p3">
                <p>{games[2].totalScore}</p>
              </div>
            </div>
          </div>
          <h1>Best Game</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
