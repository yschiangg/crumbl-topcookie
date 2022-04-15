import React, {Component} from 'react'

const TableHeader= () =>{
    return(
        <thead>
            <tr>
                <th>
                    Domain
                </th>
                <th>
                    Cookie Number
                </th>
                <th>
                    Category
                </th>
            </tr>
        </thead>
    )
}



const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.domain}</td>
          <td>{row.number}</td>
          <td>{row.category}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

class Table extends Component {
    render() {
      const {characterData} = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )
    }
  }
export default Table