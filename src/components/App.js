import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./Layout";
import BookPage from "../pages/BookPage";
import AuthorsPage from "../pages/AuthorsPage";
import GenresPage from "../pages/GenresPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import selectPage from '../actions/routing';
import { BOOK_LIST } from "../constants/mocked_objects";
import '../styles/base.css';

class AppComponent extends React.Component {
    state = {
        activePage: 'books',
        objectId: '',
    };

    onMenuSelect = (activeMenu) => {
        console.log(activeMenu);
        this.props.selectPage(activeMenu);
    };

    // todo: dispatch actions instead of setState
    onAuthorDetailsSelect = objectId => {
        console.log(`selected author id=${ objectId }`);
        this.setState({
            activePage: 'authorDetails',
            objectId,
        });
    };

    // todo: dispatch actions instead of setState
    onBookDetailsSelect = bookId => {
        console.log(`selected book id=${ bookId }`);
        this.setState({
            activePage: 'bookDetails',
            objectId: bookId,
        });
    };

    render() {
        let page = null;

        switch (this.props.activePage) {
            case 'books':
                page = <BookPage bookList={ BOOK_LIST } onBookDetailsOpen={ this.onBookDetailsSelect } onAuthorDetailsOpen={ this.onAuthorDetailsSelect }/>;
                break;
            case 'authors':
                page = <AuthorsPage/>;
                break;
            case 'genres':
                page = <GenresPage/>;
                break;
            case 'bookDetails':
                page = <BookDetailsPage book={ BOOK_LIST.find(book => book.id === this.state.objectId) }/>;
                break;
        }

        return (
            <div className="b-layout-container">
                <Layout onSelect={ this.onMenuSelect }>
                    { page }
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activePage: state.routing.activePage,
});

const mapDispatchToProps = dispatch => ({
    selectPage: activePage => dispatch(selectPage(activePage)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);
