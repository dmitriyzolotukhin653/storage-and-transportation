import React from "react";

import "./title.css";

const Title = ({ title, type = "h1", icon = null }) => {
  switch (type) {
    case "h1":
    default: {
      return <h1 className="title title_h1">{title}</h1>;
    }
    case "h2": {
      return (
        <h2 className="title title_h2">
          {title} {!!icon && <span>{icon}</span>}
        </h2>
      );
    }
  }
};

export default Title;
