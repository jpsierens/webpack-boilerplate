import React from 'react';

export default class NameOutput extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}!
            </div>
        );
    }
}
