import React from 'react';


const RecSec =()=>{
  return(
      <div class="secbody">
        <p>Crumbl monitors web requests and records all domains a tab communicates with, then calculate the total number of cookies that the relevant domains store on your browser. 
          <br></br>Learn more about cookies on <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia: HTTP COOKIES</a>.</p>
        <p>We recommend you install a general-purpose blocker to reduce your Internet footprint. Here’re some chrome extensions of non-profit blockers:</p>
      <div class="flex-container">
          <div class="col-3"> </div>
          <div class="col-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/UBlock_Origin.svg/1200px-UBlock_Origin.svg.png" width={30} height={30} />
              <br></br>
              <a href ='https://ublock.org/'>ublock</a>
          </div>
          <div class="col-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/PrivacyBadgerLogo.svg/1200px-PrivacyBadgerLogo.svg.png" width={40} height={30} />
              <br></br>
              <a href ='https://privacybadger.org/'>Privacy bager</a>
          </div>
          <div class="col-3"> </div>
      </div>

  </div>
  )
}

export default RecSec;