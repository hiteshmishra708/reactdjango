import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import TableData from './data';

class Contact extends Component {
    state = TableData;

    removeRow = index => {
        this.setState({
            data: this.state.data.filter((row, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        console.log(character)
        this.setState({data: [...this.state.data, character]});
    }

    render() {
        const { data } = this.state;
        return (
            <h1>Contact</h1>
        );
    }
}

export default Contact;