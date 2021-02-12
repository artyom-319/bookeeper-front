import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/auth';
import { closeErrorModal } from '../actions/errors';

import ErrorModal from './ModalWrapper';

class LayoutComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Link to="/">
                        <Navbar.Brand>Bookeeper</Navbar.Brand>
                    </Link>
                    <Nav className="mr-auto">
                        <Nav.Link as={ Link } to="/books" >Books</Nav.Link>
                        <Nav.Link as={ Link } to="/authors" >Authors</Nav.Link>
                        <Nav.Link as={ Link } to="/genres" >Genres</Nav.Link>
                    </Nav>
                    { this.props.authenticated ?
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: { this.props.username }
                            </Navbar.Text>
                            <Nav.Link onClick={ this.props.logout }>Logout</Nav.Link>
                        </Navbar.Collapse>
                        :
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={ Link } to="/login">Login</Nav.Link>
                        </Navbar.Collapse>
                    }
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

const mapStateToProps = state => ({
    errorOccurred: state.errors.modal.occurred,
    errorMessage: state.errors.modal.message,
    authenticated: state.auth.isAuthenticated,
    username: state.auth.username,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ closeErrorModal, logout }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
