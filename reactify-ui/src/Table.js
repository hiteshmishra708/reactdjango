import React, { Component } from 'react';

const TableHeader = props => { 
    const rows = props.columns.map((row, index) => {
        return (
            <th key={index}>{row}</th>
        );
    });

    return <thead><tr>{rows}<th>Remove</th></tr></thead>;
}

const TableBody = props => {
    const rows = props.data.map((row, index) => {
    return (
        <tr key={index}>
            {props.columns.map((column, index) => {
                return (
                    <td key={index}>{row[column]}</td>
                );
            })}
            <td><button onClick={() => props.removeRow(index)}>Delete</button></td>
        </tr>
    );
    });
    return <tbody>{rows}</tbody>;
};

class Table extends Component {
    render() {
        const { data, removeRow, columns } = this.props;

        return (
            <table>
                <TableHeader columns={columns} />
                <TableBody columns={columns} data={data} removeRow={removeRow} />
            </table>
        );
    }
}

export default Table;