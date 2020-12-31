import React from "react";
import PropTypes from 'prop-types';
import { Button, Header, Nav } from "grommet";
import { Catalog, Group, Multiple } from "grommet-icons";

const style = {
    position: 'relative',
    height: '500px',
    width: '200px',
    float: 'left',
};

class LayoutComponent extends React.Component {
    render() {
        if (this.props.children) {
            return (
                <Header background="brand" height="50px">
                    <Button icon={ <Catalog /> }
                            label="Books"
                            fill="vertical"
                            plain={ true }
                            size="medium"
                            onClick={ () => this.props.onSelect("books") }
                            hoverIndicator
                    />
                    <Button icon={ <Group /> }
                            label="Authors"
                            fill="vertical"
                            plain={ true }
                            onClick={ () => this.props.onSelect("authors") }
                            hoverIndicator
                    />
                    <Button icon={ <Multiple /> }
                            label="Genres"
                            fill="vertical"
                            plain={ true }
                            onClick={ () => this.props.onSelect("genres") }
                            hoverIndicator
                    />
                </Header>
            );
        }
        return (
            <div className="b-body">
                <div style={ style }>
                    <div className="b-left-menu">
                        <a onClick={ () => this.props.onSelect("books") } >Книги</a>
                        <br/>
                        <a onClick={ () => this.props.onSelect("authors") } >Авторы</a>
                        <br/>
                        <a onClick={ () => this.props.onSelect("genres") } >Жанры</a>
                        <br/>
                    </div>
                </div>
                <div className="b-content-container">{ this.props.children }</div>
            </div>
        );
    }
}

LayoutComponent.propTypes = {
    onSelect: PropTypes.func.isRequired,
};

export default LayoutComponent;
