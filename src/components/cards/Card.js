import React, { useState } from 'react';
import "../cards/card.css";

const Card = (props) => {

    const {title, backContent, color, subTitle,} = props;
    
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const notFlipped = () => {
    setIsFlipped(false)
  }

  // className={classNames(btnStyles, styles.btnStyles)}

  return (
    <div style={{ backgroundColor: color }} className={`flip-card ${isFlipped ? "flipped" : ""}`} onMouseLeave={notFlipped} onMouseEnter={handleFlip} >
      <div className="flip-card-inner">
        <div className="flip-card-front">
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
        <div className="flip-card-back">
            {backContent}
        </div>
      </div>
    </div>
  );
};

export default Card;
