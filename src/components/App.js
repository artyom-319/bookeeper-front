import React from 'react';

import Layout from "./Layout";
import BookPage from "../pages/BookPage";

class AppComponent extends React.Component {

    onSelect = (activeMenu) => {
        console.log(activeMenu);
    }

    render() {
        return (
            <div className="b-layout-container">
                <Layout onSelect={ this.onSelect }>
                    <BookPage/>
                </Layout>
            </div>
        );
    }
}

export default AppComponent;
