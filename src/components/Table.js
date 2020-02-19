import React, { Component } from 'react'


export default class Table extends Component {
    render() {

        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead> 
            )
        }
        
         
        
        const TableBody = props => {
            const rows = this.props.characterData.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                  </tr>
                )
              })
             
              return <tbody>{rows}</tbody>
        }

        return (
            <table>
                <TableHeader />
                <TableBody characterData={this.props.characterData} />
            </table>
        )
    }
}
      

