import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, moreSushi, eatenSushi, eatSushi}) {
  return (
    <div className="belt">
      { sushis.map((sushi) => 
    <Sushi key={sushi.id} sushi={sushi} eatenSushi={eatenSushi} eatSushi={eatSushi} />)
    }
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
