import React from "react";

import SideBar from "./SideBar";

const Canvas = props => {
  console.log(props.children);
  return (
    <div>
      <SideBar elems={props.children} />
    </div>
  );
};

export default Canvas;
