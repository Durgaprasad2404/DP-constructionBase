import React from "react";
import { Link } from "react-router-dom";

function SellVehicles(props) {
  return (
    <div className="rentalVehiclesCon">
      <Link to={`/sales/${props.category}`}>
        <img src={props.imgUrl} alt="#" className="rent-img" />
      </Link>
      <h5>{props.category}</h5>
    </div>
  );
}

export default SellVehicles;
