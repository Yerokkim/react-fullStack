import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems, deleteItem } from "./../../actions/ItemActions";
const ShoppingList = (props) => {
  const removeItem = (id) => {
    // const deltedItem = props.item.filter((x) => x.id != id);
    // setItems([...deltedItem]);

    props.deleteItem(id);
  };

  useEffect(() => {
    props.getItems();
  }, []);
  return (
    <Container>
      <Button
        color="dark"
        // onClick={() => {
        //   const name = prompt("enter item");
        //   if (name) {
        //     setItems([...items, { id: uuid(), name }]);
        //   }
        // }}
      >
        add Item
      </Button>

      <ListGroup>
        {props.item.map((x) => (
          <ListGroupItem key={x._id}>
            {x.name}
            <Button onClick={() => removeItem(x._id)}>remove</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item.items,
});
export default connect(mapStateToProps, {
  getItems,
  deleteItem,
})(ShoppingList);
