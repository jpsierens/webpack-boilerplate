import React from 'react';
import NameInput from './NameInput';
import NameOutput from './NameOutput';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }
    handleNameChange(name) {
        this.setState({name});
    }
    render() {
        return (
            <div>
                Write your name:
                <NameInput onChange={this.handleNameChange.bind(this)} />
                <NameOutput name={this.state.name} />
            </div>
        );
    }
}
