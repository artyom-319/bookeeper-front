import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormModal from "../components/FormModal";
import AuthorList from "../components/author/AuthorList";
import AuthorForm from "../components/author/AuthorForm";

const AUTHOR_LIST = [
    {
        id: 1,
        name: 'Author 1',
        country: 'Country 1',
    },
    {
        id: 2,
        name: 'Author 2',
        country: 'Country 2',
    },
    {
        id: 3,
        name: 'Author 3',
        country: 'Country 3',
    }
];

class AuthorsPageComponent extends React.Component {
    state = {
        authorList: [],
        isLoading: false,
        isModalOpen: false,
    };

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

    componentDidMount() {
        this.setState({ isLoading: true });
        window.setTimeout(
            () => this.setState({ authorList: AUTHOR_LIST, isLoading: false }),
            500
        );
    }

    render() {

        return (
            <div className="b-author-container">
                <div className="row g-2">
                    <span className="large col-10" >Authors</span>
                    <a href="#" onClick={ this.onClick } >new</a>
                </div>
                <br/>
                <AuthorList isLoading={ this.state.isLoading } authorList={ this.state.authorList }/>
                <FormModal title="New Author" show={ this.state.isModalOpen } handleClose={ this.onModalClose }>
                    <AuthorForm onCreate={ this.onAuthorCreate }/>
                </FormModal>
            </div>
        )
    }
}

export default AuthorsPageComponent;
