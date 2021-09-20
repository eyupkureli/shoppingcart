import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";

const Product = (props) => {
    const {product, addProduct} = props;
    return (
        <div>
            <Card>
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  £ {product.price}
                </CardSubtitle>
                <Button data-testid = "button" label = "add your slot" onClick={() => addProduct(product)} color="success">Add Your Slot</Button>
              </CardBody>
            </Card>
            
        </div>
    )
}

export default Product;
