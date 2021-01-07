import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormModal from '../FormModal';
import AuthorList from '../author/AuthorList';
import AuthorForm from '../author/AuthorForm';
import { openModal, closeModal } from '../../actions/authors';


class AuthorsPageComponent extends React.Component {
    render() {
        return (
            <div className="b-author-container">
                <div className="row g-2">
                    <span className="large col-11" >Authors</span>
                    <a href="#" onClick={ this.props.openModal } >new</a>
                </div>
                <br/>
                <AuthorList/>
                <FormModal title="New Author" show={ this.props.isModalOpen } onClose={ this.props.closeModal }>
                    <AuthorForm/>
                </FormModal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isModalOpen: state.author.list.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ openModal, closeModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPageComponent);
