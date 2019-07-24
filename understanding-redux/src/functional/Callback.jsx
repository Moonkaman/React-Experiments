import React, { useEffect } from "react";

const Callback = props => {
  const handleAuth = () => {
    props.auth.handleAuth();
    setTimeout(() => props.history.replace("/authcheck"), 200);
  };

  useEffect(_ => {
    handleAuth();
  }, []);

  return (
    <div>
      <h1>Callback</h1>
    </div>
  );
};

export default Callback;
