import React, { useState, useEffect } from "react";
import "./pokemon.css";

const PokemonGame = () => {
  const [pikachu, setPikachu] = useState({
    name: "Pikachu",
    health: 100,
    isShielding: false,
  });

  const [charizard, setCharizard] = useState({
    name: "Charizard",
    health: 100,
  });


  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const showMessage = (msg) => {
    setMessage(msg);
    setIsMessageVisible(true);
    setTimeout(() => {
      setIsMessageVisible(false);
      setMessage("");
    }, 2000);
  };

  const updateHealth = (player, health) => {
    if (player === "pikachu") {
      setPikachu((prev) => ({ ...prev, health }));
    } else {
      setCharizard((prev) => ({ ...prev, health }));
    }
  };

  const shield = () => {
    if (!pikachu.isShielding) {
      setPikachu((prev) => ({ ...prev, isShielding: true }));
      showMessage("Pikachu activated shield!");
      setTimeout(() => {
        setPikachu((prev) => ({ ...prev, isShielding: false }));
      }, 3000);
    }
  };

  const attack = (move) => {
    const moves = {
      thunderbolt: { damage: 25, accuracy: 0.9 },
      quickAttack: { damage: 15, accuracy: 0.95 },
      ironTail: { damage: 30, accuracy: 0.75 },
    };

    const selectedMove = moves[move];
    if (Math.random() <= selectedMove.accuracy) {
      updateHealth("charizard", Math.max(0, charizard.health - selectedMove.damage));
      showMessage(`Pikachu used ${move}! It hit!`);
    } else {
      showMessage(`Pikachu's ${move} missed!`);
    }

    if (charizard.health <= 0) {
      setTimeout(() => {
        resetGame();
      }, 2000);
      return;
    }

    setTimeout(() => {
      charizardAttack();
    }, 1000);
  };

  const charizardAttack = () => {
    const moves = [
      { name: "flamethrower", damage: 25, accuracy: 0.9 },
      { name: "dragonClaw", damage: 20, accuracy: 0.95 },
      { name: "airSlash", damage: 30, accuracy: 0.8 },
    ];

    const move = moves[Math.floor(Math.random() * moves.length)];
    if (Math.random() <= move.accuracy) {
      const damage = pikachu.isShielding ? Math.floor(move.damage / 2) : move.damage;
      updateHealth("pikachu", Math.max(0, pikachu.health - damage));
      showMessage(
        `Charizard used ${move.name}! ${
          pikachu.isShielding ? "(Damage reduced by shield!)" : "It hit!"
        }`
      );
    } else {
      showMessage(`Charizard's ${move.name} missed!`);
    }

    if (pikachu.health <= 0) {
      setTimeout(() => {
        resetGame();
      }, 2000);
    }
  };

  const resetGame = () => {
    setPikachu({ name: "Pikachu", health: 100, isShielding: false });
    setCharizard({ name: "Charizard", health: 100 });
    showMessage("New battle started!");
  };

  return (
    <div className="game-container">
      <div className="health-bars">
      <div className="pokemon-status pikachu-status">
          <div className="pokemon-name">PIKACHU</div>
          <div className="health-bar">
            <div
              className={`health-bar-fill ${
                pikachu.health <= 20
                  ? "danger"
                  : pikachu.health <= 50
                  ? "warning"
                  : ""
              }`}
              style={{ width: `${pikachu.health}%` }}
            ></div>
          </div>
        </div>
        <div className="pokemon-status charizard-status">
          <div className="pokemon-name">CHARIZARD</div>
          <div className="health-bar">
            <div
              className={`health-bar-fill ${
                charizard.health <= 20
                  ? "danger"
                  : charizard.health <= 50
                  ? "warning"
                  : ""
              }`}
              style={{ width: `${charizard.health}%` }}
            ></div>
          </div>
        </div>
        
      </div>
      <div className={`message-box ${isMessageVisible ? 'visible' : ''}`}>
        {message}
      </div>
      <div className="battle-scene">
      <div className={`pokemon pikachu ${pikachu.health <= 0 ? "fainted" : ""}`}>
          <img src="https://i.ibb.co/7jb6ymX/pngegg-1.png" alt="Pikachu" />
        </div>
        <div className={`pokemon charizard ${charizard.health <= 0 ? "fainted" : ""}`}>
          <img src="https://i.ibb.co/2538KYr/pngegg.png" alt="Charizard" />
        </div>
        
      </div>
      <div className="controls">
        <button onClick={() => attack("thunderbolt")}>Thunderbolt</button>
        <button onClick={() => attack("quickAttack")}>Quick Attack</button>
        <button onClick={() => attack("ironTail")}>Iron Tail</button>
        <button onClick={shield} className="shield-btn">
          Shield
        </button>
      </div>
    </div>
  );
};

export default PokemonGame;
