import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

// todo: вынести из автора
import { closeModal } from '../actions/authors';

class FormModalComponent extends React.Component {
    render() {
        return (
            <Modal show={ this.props.show } onHide={ this.props.closeModal }>
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
};

// todo: вынести из FormModal в родительский
const mapStateToProps = state => ({
    show: state.author.list.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ closeModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModalComponent);
