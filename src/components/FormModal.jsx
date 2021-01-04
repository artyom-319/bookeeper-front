import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

class FormModalComponent extends React.Component {
    render() {
        return (
            <Modal show={ this.props.show } onHide={ this.props.handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>{ this.props.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.props.children }
                </Modal.Body>
            </Modal>
        );
    }
}

FormModalComponent.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default FormModalComponent;
