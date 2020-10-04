import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ section }) => (
  <div className={`${section.size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${section.imageUrl})`,
      }}
    />
    <div className="content">
      <div className="title">{section.title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
