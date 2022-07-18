import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushi] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [eatenSushi, setEatenSushi] = useState([]);
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushis) => setSushi(sushis))
    
    
  }, [])

  // rendering four sushi at a time

  function givemeFour() {
    return sushis.slice(startIndex, startIndex + 4)
  };

  function moreSushi() {
    setStartIndex(startIndex + 4)
  };

  function eatSushi(sushi) {
    if(wallet >= sushi.price) {
      setEatenSushi([...eatenSushi, sushi])
      setWallet(wallet - sushi.price)
    }
    else {
      alert("Insufficient funds!")
    }
  }
  
  
  return (
    
    <div className="app">
    
      <SushiContainer  sushis={givemeFour()} moreSushi={moreSushi} eatenSushi={eatenSushi} eatSushi={eatSushi}/>
      <Table eatenSushi={eatenSushi} wallet={wallet}/>
    </div>
  );
}

export default App;
