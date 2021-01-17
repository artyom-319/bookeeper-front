import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class ModalWrapperComponent extends React.Component {
    render() {
        return (
            <Modal show={ this.props.show } onHide={ this.props.onClose }>
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

ModalWrapperComponent.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalWrapperComponent;
