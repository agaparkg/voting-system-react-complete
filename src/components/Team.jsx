import { useState } from "react";

const Team = (props) => {
  const {
    team: { id, name, img, count },
    voteFn,
  } = props;

  const handleClick = () => voteFn(id);

  return (
    <div className="box">
      <img src={img} alt="" />
      <h3>{name}</h3>
      {/* <button onClick={() => voteFn(id)} id="vote1"> */}
      <button onClick={handleClick} id="vote1">
        Vote
      </button>
      <div className="count">
        Vote count: <span id="result1">{count}</span>
      </div>
    </div>
  );
};

export default Team;
