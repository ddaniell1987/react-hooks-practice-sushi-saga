import React from "react";

function Sushi({sushi, eatSushi, eatenSushi}) {

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        {eatenSushi.includes(sushi) ? null : <img src={sushi.img_url} width="100%" alt={"Uh oh"} />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
