import React from 'react';
import '../../style/footer.css';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container-1'>
        <div className='row'>
          <div className='col'>
            <h3>MEAL SHARE - VIESIM APS</h3>
            <p className='list-unstyled'>
              <p>Vædderen, 5700 Svendborg</p>
              <p>CVR: 34565672</p>
              <p> Denmark</p>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className='container-2'>
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} VIESIM APS | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
