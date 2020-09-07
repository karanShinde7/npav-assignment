import React from 'react';
import LabelComponent from './lableComponent';

const ServerDataComponent = (props) => {
  return (
    <div className="data-div">
      {props.countryName &&
        <>
          <div className="country-div">
            <LabelComponent>Country : {props.countryName}</LabelComponent>
          </div>
          <div className="country-div">
            <LabelComponent>Average : {props.serverAverageScore}</LabelComponent>
          </div>
          {props.showServerProgress &&
            <div className="country-div">
              <div className="horiz-bar" style={{ width: (props.serverAverageScore * 2) + 'px' }}>&nbsp;</div>
            </div>
          }
          {props.showProgress &&
            <div className="country-div">
              <div className="horiz-bar" style={{ width: (props.serverAverageScore * 2) + 'px' }}>&nbsp;</div>
            </div>
          }
        </>
      }
    </div>
  )
}

export default ServerDataComponent;