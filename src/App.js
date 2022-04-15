import React, {Component} from 'react';
import Table from './table';
import RecSec from './rec';

const TableHeader = () => {
  return (
      <thead>
          <tr>
              <th>
                  Domain
              </th>
              <th>
                  Count
              </th>
              <th>
                  Category
              </th>
          </tr>
      </thead>
  )
}



const App = () => {
  const mock = [
      { domain: "google.com", count: 523, category: "CDN" },
      { domain: "googletagmanger.com", count: 417, category: "Essential" },
      { domain: "pixeldust", count: 409, category: "Essential" }
  ];

  console.log(mock);

  return (<div>
     <h6>Top Cookie Site</h6>
      <TableHeader />
      <tbody>
          {mock.map(row => 
              <tr>
                  <td>{row.domain}</td>
                  <td>{row.count}</td>
                  <td>{row.category}</td>
              </tr>
          )}
      </tbody>
      <RecSec />
  </div>);
};





export default App
