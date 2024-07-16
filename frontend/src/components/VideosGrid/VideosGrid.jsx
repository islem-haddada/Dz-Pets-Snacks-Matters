import React from 'react'
import './VideosGrid.css' 
import { assets } from '../../assets/assets'; 

const VediosGrid = () => {
  return (
    <div className="wrapper">
      <div className="items">
        
        <div className="item" tabIndex="0">
          <video controls>
            <source src={assets.video_1} type="video/mp4" />
          
          </video>
        </div>
        <div className="item" tabIndex="0">
          <video controls>
            <source src={assets.video_2} type="video/mp4" />
           
          </video>
        </div>
        <div className="item" tabIndex="0">
          <video controls>
            <source src={assets.video_3} type="video/mp4" />
           
          </video>
        </div>
        <div className="item" tabIndex="0">
          <video controls>
            <source src={assets.video_4} type="video/mp4" />
            
          </video>
        </div>
        <div className="item" tabIndex="0">
          <video controls>
            <source src={assets.video_5} type="video/mp4" />
           
          </video>
        </div>
      </div>
    </div>
  );
};

export default VediosGrid;
