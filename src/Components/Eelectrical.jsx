import React from "react";
import { pro } from "../itemsData/productsData";
import Footer from "./Footer";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function ElectronicsElectrical() {
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Electronics & Electrical</h1>
        <div style={{ margin: "10px" }} id="Cables">
          <div className="allItems">
            {pro.map((i) => {
              if (i.GROUP === "Electrical_Electronic_Items") {
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
      <Footer />
    </>
  );
}

export default ElectronicsElectrical;
