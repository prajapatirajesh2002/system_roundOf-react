import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./CardSlice";

const Card = () => {
  const products = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const removeCard = (removeId) => {
    dispatch(remove(removeId));
  };

  return (
    <div>
      <h3> Card :</h3>

      <div className="cardWrapper">
        {products.map((item, index) => {
          return (
            <div className="product" key={index}>
              <img src={item.image} alt="image" />
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>

              <button onClick={() => removeCard(item.id)} className="btn">
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
