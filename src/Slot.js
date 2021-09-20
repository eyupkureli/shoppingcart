import React from "react";
import { Button } from "reactstrap";

const Slot = (props) => {
  const { slotItems, removeProduct } = props;
  const productsPrice = slotItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.amount,
    0
  );

  

  let beanAmount = slotItems
    .filter((slot) => slot.id === 1)
    .reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
  let beanDiscount = Math.floor(beanAmount / 3) * 0.5;

  let colaAmount = slotItems
    .filter((slot) => slot.id === 2)
    .reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
  let colaDiscount = Math.floor(colaAmount / 2) * 0.4;

  return (
    <aside>
      <h1>Your Slot</h1>
      <div>
        {slotItems.length === 0 && (
          <div>
            <p>There is no product...</p>
          </div>
        )}
      </div>
      {slotItems.map((slotItem) => (
        <div key={slotItem.id}>
          <div>{slotItem.name}</div>
          <div>
            <Button data-testid = "remove" onClick={() => removeProduct(slotItem)} color="danger">
              Remove
            </Button>
          </div>
          <div>
            Quantity :{slotItem.amount}
          </div>
          <hr></hr>
        </div>
      ))}
      {slotItems.length !== 0 && (
        <>
         
          <div>
            <div>Total Price </div>
            <div>
              £ {(productsPrice - beanDiscount - colaDiscount).toFixed(2)}
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Slot;
