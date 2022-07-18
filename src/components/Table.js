import React from "react"

function Table({ eatenSushi, wallet }) {
  // renders an empty plate for every element in the array
  function emptyPlates(array){
  return array.map((item, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
  }
  return (
    <>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates(eatenSushi)}</div>
      </div>
    </>
  );
}

export default Table;
