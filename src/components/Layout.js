import React from "react";
import PropTypes from 'prop-types';

const style = {
    position: 'relative',
    height: '500px',
    width: '200px',
    float: 'left',
};

class LayoutComponent extends React.Component {

    render() {
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
