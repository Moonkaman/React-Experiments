import React from "react";

const SideBar = props => {
  return (
    <div>
      {props.elems.map(elem => {
        return <h3>{elem.type}</h3>;
      })}
    </div>
  );
};

export default SideBar;
