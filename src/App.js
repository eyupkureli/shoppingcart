import React, {useState} from "react";
import "./App.css";
import Navi from "./Navi";
import Shopping from "./Shopping";
import Slot from "./Slot";
import { Container, Row, Col } from "reactstrap";
import data from "./data";

function App() {
  const {products} = data;
  const [slotItems, setSlotItems] = useState([]);
  
  const addProduct = (product) => {
    const inSlot = slotItems.find(item => item.id === product.id);
    if(inSlot ) {
      setSlotItems(slotItems.map(item => item.id === product.id ? {...inSlot, amount: inSlot.amount + 1} : item
        ));
    }else {
      setSlotItems([...slotItems, {...product, amount: 1}]);
    }
  };

  const removeProduct = (product) => {
    const inSlot = slotItems.find(item => item.id === product.id);
    if(inSlot.amount === 1) {
      setSlotItems(slotItems.filter(item => item.id !== product.id));
    }else {
      setSlotItems(slotItems.map(item => item.id === product.id ? {...inSlot, amount: inSlot.amount - 1} : item
        ));
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs = "6"><Shopping addProduct = {addProduct} products = {products}></Shopping></Col>
          <Col xs = "6"><Slot addProduct = {addProduct} removeProduct = {removeProduct} slotItems = {slotItems}></Slot></Col>      
        </Row>
      </Container>
    </div>
  );
}

export default App;
