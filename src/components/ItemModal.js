import React, { useState } from "react";

import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "./../actions/ItemActions";

const ItemModal = (props) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName({ [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      name: name.name,
    };

    console.log(newItem);
    props.addItem(newItem);

    toggle();
  };
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <Button onClick={toggle}>ADD Item</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ADD</ModalHeader>

        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="add item here"
                onChange={onChange}
              />
              <Button>add</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  item: state.item.items,
});
ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { addItem })(ItemModal);
