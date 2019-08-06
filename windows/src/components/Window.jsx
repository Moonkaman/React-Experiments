import React from "react";
import { css } from "emotion";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";

const windowBar = css`
  background: blue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    margin: 0px;
  }
`;

const closeBtn = css`
  background: red;
`;

const controls = css`
  display: flex;
  & p {
    padding: 0 10px;
    cursor: pointer;
  }
`;

const windowCss = css`
  border: 1px solid lightgray;
  box-shadow: 0 0 4px lightgray;
`;

const Window = props => {
  return (
    <Resizable>
      <Draggable
        handle="#window-bar"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
      >
        <div className={windowCss}>
          <div className={windowBar} id="window-bar">
            <p>{props.title}</p>
            <div className={controls}>
              <p>-</p>
              <p>[]</p>
              <p className={closeBtn}>X</p>
            </div>
          </div>
          <div>{props.children}</div>
          <div className="handle">e</div>
        </div>
      </Draggable>
    </Resizable>
  );
};

export default Window;
