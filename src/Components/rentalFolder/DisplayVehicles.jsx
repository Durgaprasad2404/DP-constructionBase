import React from "react";
import { Link } from "react-router-dom";
import "./rentstyle.css";

function DisplayVehicles(props) {
  return (
    <div className="rentalVehiclesCon">
      <Link to={`/rental/${props.category}`}>
        <img src={props.imgUrl} alt="#" className="rent-img" />
      </Link>
      <h5>{props.category}</h5>
    </div>
  );
}

export default DisplayVehicles;
