import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initUser } from '../actions';

const user = {
    name: 'Test',
    level: 1
}

class Home extends Component {
    onClick() {
        this.props.initUser(user);
    }

    render() {
        const user = this.props.user;

        return (
            <div>
                <h1>Home</h1>
                {user ?
                    <p>User name: {user.name}</p> :
                    <p>Init user first!</p>
                }
                <button onClick={this.onClick.bind(this)}>init user</button>
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps, { initUser })(Home);
