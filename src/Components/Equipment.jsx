import React from "react";
import { pro } from "../itemsData/productsData";
import Footer from "./Footer";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function Equipment() {
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Equipment For Construction</h1>
        <div style={{ margin: "10px" }} id="Electrical">
          <div className="allItems">
            {pro.map((i) => {
              if (i.GROUP === "EquipmentItems") {
                return (
                  <Allproducts
                    key={i.ID}
                    id={i.ID}
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
      <Footer />
    </>
  );
}

export default Equipment;
