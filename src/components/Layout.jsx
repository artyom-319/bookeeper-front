import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeErrorModal } from '../actions/errors';

import { AUTHORS_PAGE, BOOKS_PAGE, GENRES_PAGE, MAIN_PAGE } from '../constants/pages';
import ErrorModal from './ModalWrapper';

class LayoutComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand onClick={ () => this.props.onSelect(MAIN_PAGE) } href="#">Bookeeper</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={ () => this.props.onSelect(BOOKS_PAGE) }>Books</Nav.Link>
                        <Nav.Link onClick={ () => this.props.onSelect(AUTHORS_PAGE) }>Authors</Nav.Link>
                        <Nav.Link onClick={ () => this.props.onSelect(GENRES_PAGE) }>Genres</Nav.Link>
                    </Nav>
                </Navbar>
                <br/>
                <div className="b-content">
                    { this.props.children }
                </div>
                <ErrorModal
                    title="Error has occurred"
                    show={ this.props.errorOccurred }
                    onClose={ this.props.closeErrorModal }
                >
                    <div className="alert-danger">{ this.props.errorMessage }</div>
                </ErrorModal>
            </div>
        );
    }
}

LayoutComponent.propTypes = {
    onSelect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errorOccurred: state.errors.modal.occurred,
    errorMessage: state.errors.modal.message,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ closeErrorModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
