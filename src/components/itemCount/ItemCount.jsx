import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function ItemCount({ stock, initial, onAdd}) {
  const [qty, setQty] = useState(initial);

  const handleClickPlus = () => {
    if (qty === stock) {
      setQty(qty);
    } else {
      setQty(qty + 1);
    }
  };

  const handleClickMinus = () => {
    if (qty === initial) {
      setQty(qty);
    } else {
      setQty(qty - 1);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <center>
            <ButtonGroup type="checkbox">
              <Button id="tbg-btn-1" variant="outline-dark" onClick={handleClickMinus}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Button id="tbg-btn-2" variant="dark" disabled>
                {qty}
                </Button>
              <Button id="tbg-btn-3" variant="outline-dark" onClick={handleClickPlus}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </ButtonGroup>
          </center>
        </Card.Header>
          <Button variant="dark" onClick={() => onAdd(qty)}>
            Agrégalo al pinche carrito Wey
          </Button>
      </Card>
    </>
  );
}

export default ItemCount;