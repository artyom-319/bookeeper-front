import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Layout';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import GenresPage from './pages/GenresPage';
import AuthorDetailsPage from './pages/AuthorDetailsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import selectPage from '../actions/routing';
import { AUTHORS_PAGE, BOOKS_PAGE, GENRES_PAGE } from '../constants/pages';
import { AUTHOR_DETAILS_PAGE, BOOK_DETAILS_PAGE, GENRE_BOOKS_PAGE } from '../constants/pages';
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
                page = <BooksPage booksFetchUrl={ urls.books }/>;
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
            case GENRE_BOOKS_PAGE:
                const url = `${ urls.genres }/${ this.props.entityId }/books`;
                page = <BooksPage booksFetchUrl={ url } pageTitle={ `Books of ${ this.props.entityId } genre` }/>
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
