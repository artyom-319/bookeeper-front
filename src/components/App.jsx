import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Layout';
import BookPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import GenresPage from './pages/GenresPage';
import AuthorDetailsPage from './pages/AuthorDetailsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import selectPage from '../actions/routing';
import { AUTHOR_DETAILS_PAGE, AUTHORS_PAGE, BOOK_DETAILS_PAGE, BOOKS_PAGE, GENRES_PAGE } from '../constants/pages';
import urls from '../constants/urls';
import '../styles/base.css';

class AppComponent extends React.Component {
    onMenuSelect = (activeMenu) => {
        this.props.selectPage(activeMenu);
    };

    render() {
        let page = null;

        switch (this.props.activePage) {
            case BOOKS_PAGE:
                page = <BookPage booksFetchUrl={ urls.books }/>;
                break;
            case AUTHORS_PAGE:
                page = <AuthorsPage/>;
                break;
            case GENRES_PAGE:
                page = <GenresPage/>;
                break;
            case BOOK_DETAILS_PAGE:
                page = <BookDetailsPage id={ this.props.entityId }/>;
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
