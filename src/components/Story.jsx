import React, { useState } from "react";
import "./Story.css";
import { Gi3dStairs, GiAlienBug, GiBeech, GiBee, GiBeachBall, GiBatwingEmblem, GiBattleMech, GiBigWave, GiCamel, GiCastle, GiFoodChain, Gi3dHammer, GiAbstract097, GiAncientRuins, GiAncientSword, GiAnteater} from "react-icons/gi";

function Story() {
  const [history, setHistory] = useState([]); 
  const [RandomNumber, setRandomNumber] = useState([])

  const [icone, setIcone] =useState([<Gi3dStairs />, <GiAlienBug />, <GiBeech />, <GiBee />, <GiBeachBall />,
    <GiBatwingEmblem />, <GiBattleMech />, <GiBigWave />, <GiCamel />, <GiCastle />, <GiFoodChain />, <Gi3dHammer />, <GiAbstract097 />, <GiAncientRuins />, <GiAncientSword />, <GiAnteater />]);
  const [iconeClone, setIconeClone] = useState([...icone])

//----------------------------------------------------------
  const GeraRandomNumber = () => {
    const n = Math.floor(Math.random() * iconeClone.length);

  setRandomNumber(iconeClone [n])


//----------------------------------------------------------
    setIconeClone (prev => prev.filter((_, index) => index !== n))


//----------------------------------------------------------
    if (iconeClone.length === 0){
      alert('já foram todos paisão')
      return
    }


    

//----------------------------------------------------------
    setHistory(prevHistory => [...prevHistory, iconeClone[n]].slice(-5));
  };


//----------------------------------------------------------
      const reset = () => {
        setRandomNumber(null)
        setIconeClone([...icone])

  };


//----------------------------------------------------------

  return (
    <div className="container-story">
      <h1 className="titulo">Crie a sua história usando imagens</h1>

      <div className="espaço">
        {/* Espaço entre os elementos */}
      </div>

      
      <p>{history.map((iconeClone, index) => <span key={index}>{iconeClone} </span>)}</p>



      <div className="espaço-2">
        {/* Espaço entre os elementos */}
      </div>

      <button className='b1' onClick={GeraRandomNumber}>Gerar emoji</button>
      <button className='b2' onClick={reset}>reinici</button>
      
    </div>
  );
}

export default Story;



/**<Gi3dStairs />, <GiAlienBug />, <GiBeech />, <GiBee />, <GiBeachBall />,
    <GiBatwingEmblem />, <GiBattleMech />, <GiBigWave />, <GiCamel />, <GiCastle />, <GiFoodChain /> */