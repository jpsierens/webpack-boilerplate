import React from 'react';

export default class NameInput extends React.Component {
    handleChange () {
        this.props.onChange(this.input.value);
        // console.log(this.input.value);
    }
    render() {
        return (
            <div>
                <input 
                    style={{padding: '5px',margin: '5px 0'}}
                    ref={(c) => this.input = c}
                    onChange={this.handleChange.bind(this)} />

            </div>
        );
    }
}
