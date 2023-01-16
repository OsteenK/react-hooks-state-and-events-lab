import React,{ useState } from "react";

function Item({ name, category }) {
  const [className, setClassName]  = useState(true)
  

  // const addItemToCart = () => {
  //   setCart(!inCart);
  // }

  function handleItemClick(){
    setClassName((className) => !className);

  }

  return (
  <li className={className ? "" : "in-cart"}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button className={className ? "remove" : "add"} onClick = {handleItemClick} >
       
      {className ? "Add to Cart" : "Remove from Cart"}
      </button>
  </li>
  );  

 
}

export default Item;
