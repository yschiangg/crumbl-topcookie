import React, {Component} from 'react';
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

  return (<div class="mainbody">
    <h1>Crumbl dashboard</h1>
    <h4>How does Crumbl work?</h4>
    <RecSec />
    <h4>Top sites for cookie</h4>
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
      <h4>Stale cookies</h4>

  </div>);
};





export default App
