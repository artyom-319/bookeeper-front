import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import GenresPage from './pages/GenresPage';
import AuthorDetailsPage from './pages/AuthorDetailsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import urls from '../constants/urls';
import '../styles/base.css';
import ProtectedRoute from './ProtectedRoute';


class AppComponent extends React.Component {
    render() {
        return (
            <div className="b-layout-container">
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/" exact>
                                <MainPage/>
                            </Route>
                            <ProtectedRoute path="/books" exact>
                                <BooksPage booksFetchUrl={ urls.books }/>
                            </ProtectedRoute>
                            <ProtectedRoute path="/authors" exact>
                                <AuthorsPage/>
                            </ProtectedRoute>
                            <ProtectedRoute path="/genres" exact>
                                <GenresPage/>
                            </ProtectedRoute>
                            <ProtectedRoute path="/authors/:id" render={ props =>
                                <AuthorDetailsPage id={ props.match.params.id }/>
                            }/>
                            <ProtectedRoute path="/books/:id" render={ props =>
                                <BookDetailsPage id={ props.match.params.id }/>
                            }/>
                            <ProtectedRoute path="/genres/:title/books" render={ props => {
                                const url = `${ urls.genres }/${ props.match.params.title }/books`;
                                return <BooksPage booksFetchUrl={ url }
                                                  pageTitle={ `Books of ${ props.match.params.title } genre` }/>;
                            }}/>
                            <Route path="/login">
                                <LoginPage/>
                            </Route>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppComponent;
