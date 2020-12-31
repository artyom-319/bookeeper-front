import React from 'react';
import { Grommet } from "grommet";
import { defaultProps } from 'grommet';

import Layout from "./Layout";
import BookPage from "../pages/BookPage";

const theme = {
    global: {
        font: {
            // face: false,
            family: 'Avenir',
            size: '16px',
            height: '20px',
        },
    },
    button: {
        border: {
            width: '0px',
        },
    },
};

class AppComponent extends React.Component {

    onSelect = (activeMenu) => {
        console.log(activeMenu);
    }

    render() {
        console.log(defaultProps);
        return (
            <Grommet theme={ theme }>
                <div className="b-layout-container">
                    <Layout onSelect={ this.onSelect }>
                        <BookPage/>
                    </Layout>
                </div>
            </Grommet>
        );
    }
}

export default AppComponent;
