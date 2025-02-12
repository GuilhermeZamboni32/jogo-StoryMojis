import React, { useState } from "react";
import "./Story.css";
import { Gi3dStairs, GiAlienBug, GiBeech, GiBee, GiBeachBall, GiBatwingEmblem, GiBattleMech, GiBigWave, GiCamel, GiCastle } from "react-icons/gi";

function Story() {
  const [history, setHistory] = useState([]); 

  const icone = [
    <Gi3dStairs />, <GiAlienBug />, <GiBeech />, <GiBee />, <GiBeachBall />,
    <GiBatwingEmblem />, <GiBattleMech />, <GiBigWave />, <GiCamel />, <GiCastle />
  ];

  const RandomNumber = () => {
    const n = Math.floor(Math.random() * icone.length);

    setHistory(prevHistory => [...prevHistory, icone[n]].slice(-5)); 
  };

  return (
    <div className="container-story">
      <h1 className="titulo">Crie a sua história usando imagens</h1>

      <div className="espaço">{/* Espaço entre os elementos */}</div>

      {/* Exibindo apenas os últimos 3 emojis */}
      <p>{history.map((emoji, index) => <span key={index}>{emoji} </span>)}</p>

      <div className="espaço-2">{/* Espaço entre os elementos */}</div>

      <button onClick={RandomNumber}>Gerar emoji</button>
    </div>
  );
}

export default Story;
