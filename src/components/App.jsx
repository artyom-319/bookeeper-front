import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Layout';
import BookPage from './pages/BookPage';
import AuthorsPage from './pages/AuthorsPage';
import GenresPage from './pages/GenresPage';
import AuthorDetailsPage from './pages/AuthorDetailsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import selectPage from '../actions/routing';
import { BOOK_LIST } from '../constants/mocked_objects';
import { AUTHOR_DETAILS_PAGE, AUTHORS_PAGE, BOOK_DETAILS_PAGE, BOOKS_PAGE, GENRES_PAGE } from '../constants/pages';
import '../styles/base.css';

class AppComponent extends React.Component {
    onMenuSelect = (activeMenu) => {
        this.props.selectPage(activeMenu);
    };

    render() {
        let page = null;

        switch (this.props.activePage) {
            case BOOKS_PAGE:
                page = <BookPage bookList={ BOOK_LIST } />;
                break;
            case AUTHORS_PAGE:
                page = <AuthorsPage/>;
                break;
            case GENRES_PAGE:
                page = <GenresPage/>;
                break;
            case BOOK_DETAILS_PAGE:
                page = <BookDetailsPage book={ BOOK_LIST.find(book => book.id === this.props.entityId) }/>;
                break;
            case AUTHOR_DETAILS_PAGE:
                page = <AuthorDetailsPage id={ this.props.entityId }/>;
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
    entityId: state.routing.entityId,
});

const mapDispatchToProps = dispatch => ({
    selectPage: activePage => dispatch(selectPage(activePage)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);
