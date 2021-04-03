import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import TableData from './data';

class App extends Component {
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
            <div className="container">
                <h1>Dynamic Tables With React</h1>
                <Table
                    data={data}
                    removeRow={this.removeRow}
                    columns={this.state.columns}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} columns={this.state.columns} />
            </div>
        );
    }
}

export default App;