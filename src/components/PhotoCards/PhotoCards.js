import React from "react";
import "./PhotoCards.css";

const styles = {
  pic: {
    height: "150px",
    width: "150px"
  }
}

const PhotoCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.clickCheck(props.id)} style={styles.pic} alt={props.id} src={props.image}/>
    </div>
  </div>
);

export default PhotoCard;
