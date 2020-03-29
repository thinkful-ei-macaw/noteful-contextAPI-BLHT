import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            redirect: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true};
    }

    render() {
        if(this.state.error) {
            return (
                <div className="err-message">
                    <p>Sorry, your request could not be processed</p>
                    <Redirect to="/" />
                </div>
            );
        }
        return this.props.children;
    }
}

export default Error;
