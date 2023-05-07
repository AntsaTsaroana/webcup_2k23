import React from "react";

import "../Assets/css/loading.scss";

const Loading = () => {
  return (
    <div className="outerLoading">
      <div className="innerLoading">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
