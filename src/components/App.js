import React from 'react';
import { Grommet } from "grommet";

import Layout from "./Layout";
import BookPage from "../pages/BookPage";
import AuthorsPage from "../pages/AuthorsPage";
import GenresPage from "../pages/GenresPage";
import '../styles/base.css';
import { theme } from '../styles/grommet-theme';

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
            <Grommet theme={ theme }>
                <div className="b-layout-container">
                    <Layout onSelect={ this.onSelect }>
                        { page }
                    </Layout>
                </div>
            </Grommet>
        );
    }
}

export default AppComponent;
