import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

import BookForm from "./BookForm";

class BookFormModalComponent extends React.Component {
    render() {
        return (
            <Modal show={ this.props.show } onHide={ this.props.handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookForm onCreate={ this.props.onCreate }/>
                </Modal.Body>
            </Modal>
        );
    }
}

BookFormModalComponent.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
}

export default BookFormModalComponent;
