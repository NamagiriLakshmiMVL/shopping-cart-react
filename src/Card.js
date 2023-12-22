import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function Card({ product, count, setCount }) {
  const Styles = {
    width: "270px",
    height: "169px",
    position: "relative"
  };
  const newStyle = {
    backgroundColor: "black",
    color: "white",
    width: "40px",
    height: "fit-content",
    borderRadius: "8px",
    fontSize: "15px",
    position: "absolute",
    margin: "5px 225px"
  };
  const styles = {
    textDecoration: "line-through",
    color: "grey"
  };
  const [cart, setCart] = useState("Add");
  return (

    <div className="card">



      <div className="cardBody">

        <img style={Styles} src={product.src} alt={product.type} />
        <p style={newStyle}>{product.number}</p>
        <div className="Cont-1">
          <h4><b>{product.type}</b></h4>
          <h2 style={{ fontSize: "15px" }}>{product.rating}</h2>
          <div className="rate">
            <p style={styles}>{product.rate1}</p>
            <p>{product.rate}</p>
          </div>
        </div>
        <div className="buttonCls">
          <Button variant="outlined" onClick={() => { setCount(cart === "Add" ? count + 1 : count - 1); setCart(cart === "Add" ? "Remove" : "Add"); }}>{cart} to Cart</Button>
        </div>
      </div>


    </div>
  );
}
