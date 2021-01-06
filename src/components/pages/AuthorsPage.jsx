import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormModal from '../FormModal';
import AuthorList from '../author/AuthorList';
import AuthorForm from '../author/AuthorForm';
import { openModal } from '../../actions/authors';


class AuthorsPageComponent extends React.Component {
    onClick = () => {
        this.props.openModal();
    };

    render() {
        return (
            <div className="b-author-container">
                <div className="row g-2">
                    <span className="large col-11" >Authors</span>
                    <a href="#" onClick={ this.onClick } >new</a>
                </div>
                <br/>
                <AuthorList/>
                <FormModal title="New Author">
                    <AuthorForm/>
                </FormModal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ openModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPageComponent);
