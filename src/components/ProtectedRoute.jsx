import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRouteComponent extends React.Component {
    render() {
        return this.props.authRequired ? <Redirect to="/login"/> : <Route { ...this.props }/>;
    }
}
const mapStateToProps = state => ({
    authRequired: state.auth.authRequired,
});

export default connect(mapStateToProps)(ProtectedRouteComponent);
