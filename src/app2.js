import React from 'react'

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



// const TableBody = (props) => {
//     const rows = props.characterData.map((row, index) => {
//       return (
//         <tr key={index}>
//           <td>{row.domain}</td>
//           <td>{row.number}</td>
//           <td>{row.category}</td>
//         </tr>
//       )
//     })
  
//     return <tbody>{rows}</tbody>
//   }

interface topSitesData {
  domain: string;
  count: number;
  category: string;
}

  
const Table = () => {
  const mock = [
    {domain: "google.com", count: 523, category: "CDN"},
    {domain: "googletagmanger.com", count: 523, category: "Essential"}
  ];
  
  return (<>
    	<TableHeader />
      {mock.map(row, index) => {
        <tr key={index}>
              <td>{row.domain}</td>
              <td>{row.number}</td>
              <td>{row.category}</td>
            </tr>
      }}
    </>);
};
// class Table extends Component {
//     render() {
//       const {characterData} = this.props
  
//       return (
//         <table>
//           <TableHeader />
//           <TableBody characterData={characterData} />
//         </table>
//       )
//     }
//   }
export default Table;