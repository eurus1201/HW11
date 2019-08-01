import React from 'react';



   function RenderRow  ({column , changeHandler}) {
      

        switch (column.type) {
            case 'bool':
                return <input
                    type="checkbox"
                    name={column.name}
                    checked={column.name}
                    onChange={changeHandler}
                    placeholder={column.label}
                />
            case 'list':
                return <select name={column.name} onChange={changeHandler}>
                    {column.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
            default:
                // <td><input
                //     type="text"
                //     name="username"
                //     value={this.state['username']}
                //     onChange={this.changeHandler}
                //     placeholder="Username" /><td>
                return <input
                    type={column.type}
                    name={column.name}
                    value={column.name}
                    onChange={changeHandler}
                    placeholder={column.label}
                />
        }
    }

export default RenderRow
