import React, { Component } from 'react';
import Header from './header';
import Row from './row';
import Pagination from './Pagination'

export default class Table extends Component {
    state = {
        rows: [], currentRow: [], currentPage: null, totalPages: null
    }
    componentDidMount() {
        const { rows } = this.state;
        // const { data: rows = [] } = row.findAll();
        this.setState({ rows });
    }
    onPageChanged = data => {
        const { rows } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentRow = rows.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentRow, totalPages });
    }

    addRow = row => {
        const { rows } = this.state;
        this.setState({ rows: [...rows, row] })
    }

    deleteRow = id => (a) => {
        const { rows } = this.state;
        rows.splice(rows.findIndex(row => row.id === id), 1);
        this.setState({ rows });
    }

    editRow = row => {
        debugger
        const { rows } = this.state;
        rows[rows.findIndex(_row => _row.id === row.id)] = row;
        this.setState({ rows });
    }

    sortColumn = (name) => {
        const { rows, isSort } = this.state;
        var sorttype = name.trim().toLowerCase();
        console.log(sorttype);

        if (isSort === false) {
            switch (sorttype) {
                case 'age':
                    rows.sort((a, b) => {
                        return a.age - b.age
                    });
                    break
                case 'username *':
                    rows.sort((a, b) => {
                        let nameA = a.username; let nameB = b.username;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'first name *':
                    rows.sort((a, b) => {
                        let nameA = a.firstName; let nameB = b.firstName;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'last name':
                    rows.sort((a, b) => {
                        let nameA = a.lastName; let nameB = b.lastName;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'sex':
                    rows.sort((a, b) => {
                        let nameA = a.sex; let nameB = b.sex;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'status *':
                    rows.sort((a, b) => {
                        let nameA = a.status; let nameB = b.status;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                default: { }

            }
            this.setState({ isSort: true });
        } else {
            switch (sorttype) {
                case 'age':
                    rows.sort((a, b) => {
                        return a.age - b.age
                    });
                    break
                case 'username *':
                    rows.sort((a, b) => {
                        let nameA = a.username; let nameB = b.username;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'first name *':
                    rows.sort((a, b) => {
                        let nameA = a.firstName; let nameB = b.firstName;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'last name':
                    rows.sort((a, b) => {
                        let nameA = a.lastName; let nameB = b.lastName;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'sex':
                    rows.sort((a, b) => {
                        let nameA = a.sex; let nameB = b.sex;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'status *':
                    rows.sort((a, b) => {
                        let nameA = a.status; let nameB = b.status;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                default: { }

            }
            switch (sorttype) {
                case 'age':
                    rows.reverse((a, b) => {
                        return a.age - b.age
                    });
                    break
                case 'username *':
                    rows.reverse((a, b) => {
                        let nameA = a.username; let nameB = b.username;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'first name *':
                    rows.reverse((a, b) => {
                        let nameA = a.firstName; let nameB = b.firstName;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'last name':
                    rows.reverse((a, b) => {
                        let nameA = a.lastName; let nameB = b.lastName;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'sex':
                    rows.reverse((a, b) => {
                        let nameA = a.sex; let nameB = b.sex;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                case 'status *':
                    rows.reverse((a, b) => {
                        let nameA = a.status; let nameB = b.status;
                        if (nameA < nameB) //sort string ascending
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 //default return value (no sorting)
                    });
                    break
                default: { }

            }
            this.setState({ isSort: false });
        }

        this.setState({ rows });
    }
    render() {
        const { rows } = this.state;
        const { addRow, deleteRow, editRow, sortColumn, props: { columns } } = this;
        return <> {/* <React.Fragment> */}
            <h1>Editable Table</h1>
            <table>
                <Header
                    columns={columns}
                    addRow={addRow}
                    sortColumn={sortColumn}
                />
                <tbody>
                    {rows.map(row => <Row key={row.id} row={row} columns={columns} onDelete={deleteRow(row.id)} onEdit={editRow} />)}
                </tbody>
            </table>


<div>0
                <Pagination rows={rows} />
</div>
          

        </>;
    }
}