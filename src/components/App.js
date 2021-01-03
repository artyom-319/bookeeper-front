import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./Layout";
import BookPage from "../pages/BookPage";
import AuthorsPage from "../pages/AuthorsPage";
import GenresPage from "../pages/GenresPage";
import '../styles/base.css';

class AppComponent extends React.Component {
    state = {
        activeMenu: 'books',
    };

    onSelect = (activeMenu) => {
        console.log(activeMenu);
        this.setState({
            activeMenu
        });
    }

    render() {
        let page = null;

        switch (this.state.activeMenu) {
            case 'books':
                page = <BookPage/>;
                break;
            case 'authors':
                page = <AuthorsPage/>;
                break;
            case 'genres':
                page = <GenresPage/>;
                break;
        }

        return (
            <div className="b-layout-container">
                <Layout onSelect={ this.onSelect }>
                    { page }
                </Layout>
            </div>
        );
    }
}

export default AppComponent;
