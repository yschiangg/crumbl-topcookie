//App備份

import React, {Component} from 'react';
import Table from './table';
import RecSec from './rec';
import Rec2 from './rec2';

class App extends Component {
  render() {

    const characters = [
        {
          domain: 'gstatic',
          number: '523',
          category: 'CDN',
        },
      ]
    
      return (
        <div className="container">
          <h5>Cookie Jar Analytics</h5>
          <div>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Top sites</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Stale cookies</a>
              </li>
            </ul>

          </div>
          <Table characterData={characters} />
          <RecSec />
          <Rec2 />
        
        </div>
      )
  }
}


export default App
