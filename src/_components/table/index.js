import React, { Component } from 'react';
import Header from './header';
import Row from './row';


export default class Table extends Component {
    state = {
        rows: [],
         isSort: false,
         currentPage: 1,
        addedRowInPage: 3
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

    onChangePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {
        const { rows, currentPage, addedRowInPage } = this.state;
        const { addRow, deleteRow, editRow, sortColumn, props: { columns } } = this;
        const lastRowToSlice = currentPage * addedRowInPage;
        const firstRowToSlice = lastRowToSlice - addedRowInPage;
        const rowsPerPage = rows.slice(firstRowToSlice, lastRowToSlice);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(rows.length / addedRowInPage); i++) {
            pageNumbers.push(i);}

        return <> {/* <React.Fragment> */}
            <h1>Editable Table</h1>
            <table>
                <Header
                    columns={columns}
                    addRow={addRow}
                    sortColumn={sortColumn}
                />
                <tbody>
                    {rowsPerPage.map(row => <Row key={row.id} row={row} columns={columns} onDelete={deleteRow(row.id)} onEdit={editRow} />)}
                </tbody>
            </table>  
            <div className="page-number">
                <ul>
                    {pageNumbers.map(number => {
                        return (
                            <li
                                key={number}
                                id={number}
                                onClick={this.onChangePage}
                            >
                                {number}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>;
    
    }}