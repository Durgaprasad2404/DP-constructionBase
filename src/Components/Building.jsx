import React from "react";
import { pro } from "../itemsData/productsData";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function Building() {
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Building & Construction</h1>
        <div style={{ margin: "10px" }} id="Bricks">
          <div className="allItems">
            {pro.map((i) => {
              if (i.GROUP === "buildingItem") {
                return (
                  <Allproducts
                    id={i.ID}
                    key={i.ID}
                    itemname={i.ITEMNAME}
                    imgUrl={i["IMG URL"]}
                    price={i.PRICE}
                    oldprice={i.OLDPRICE}
                    offer={i.OFFER}
                  /> //it goes to ProductDisplay folder (allproducts)
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Building;
