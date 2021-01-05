import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormModal from "../FormModal";
import AuthorList from "../author/AuthorList";
import AuthorForm from "../author/AuthorForm";


class AuthorsPageComponent extends React.Component {
    // state = {
    //     authorList: [],
    //     isLoading: false,
    //     isModalOpen: false,
    // };

    onClick = () => {
        console.log("'new' clicked");
        this.setState({
            isModalOpen: true,
        });
    };

    onAuthorCreate = author => {
        console.log(author);
        this.setState({
            authorList: [ author, ...this.state.authorList ],
            isModalOpen: false,
        });
    };

    onModalClose = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    render() {

        return (
            <div className="b-author-container">
                <div className="row g-2">
                    <span className="large col-10" >Authors</span>
                    <a href="#" onClick={ this.onClick } >new</a>
                </div>
                <br/>
                <AuthorList/>
                {/*<FormModal title="New Author" show={ this.state.isModalOpen } handleClose={ this.onModalClose }>*/}
                {/*    <AuthorForm onCreate={ this.onAuthorCreate }/>*/}
                {/*</FormModal>*/}
            </div>
        );
    }
}

export default AuthorsPageComponent;
