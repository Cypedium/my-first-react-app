import React, { Component } from 'react'


export default class Table extends Component {
    render() {

        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Options</th>
                    </tr>
                </thead> 
            )
        }
        
        const TableBody = props => {
            const rows = props.characterData.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td>
                        <button onClick={() => props.removeCharacter(index)}>Delete</button>
                    </td>
                  </tr>
                )
              });
             
              return <tbody>{rows}</tbody>
        }

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={this.props.characterData} 
                    removeCharacter={this.props.removeCharacter} 
                />
            </table>
        )
    }
}
      

