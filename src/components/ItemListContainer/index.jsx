import React from "react";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container-prop">
      <p className="prop animate">{greeting}</p>
      <video className="video-container" autoPlay loop muted>
        <source
          src="../../video/video_leagueoflegends_index.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
};

export default ItemListContainer;
