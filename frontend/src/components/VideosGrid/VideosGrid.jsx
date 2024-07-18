import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets'; // Assurez-vous que le chemin est correct
import './VideosGrid.css';

const VideosGrid = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    const liSlides = document.querySelectorAll('.li_slide');
    liSlides.forEach(slide => {
      slide.style.width = `${width}px`;
      slide.style.height = `${height}px`;
    });
  }, [width, height]);

  return (
    <div>
      <div id="pSlider" style={{ width: `${width}px`, height: `${height}px` }}>
        <ol id="slider-container" dir="ltr">
          <li id="slide_1" className="li_slide">
            <video src={assets.video_1} autoPlay loop muted></video>
            <div className="slide-snapper"></div>
            <a className="prev_slide" href="#slide_4"></a>
            <a className="next_slide" href="#slide_2"></a>
          </li>
          <li id="slide_2" className="li_slide">
            <video src={assets.video_2} autoPlay loop muted></video>
            <div className="slide-snapper"></div>
            <a className="prev_slide" href="#slide_1"></a>
            <a className="next_slide" href="#slide_3"></a>
          </li>
          <li id="slide_3" className="li_slide">
            <video src={assets.video_3} autoPlay loop muted></video>
            <div className="slide-snapper"></div>
            <a className="prev_slide" href="#slide_2"></a>
            <a className="next_slide" href="#slide_4"></a>
          </li>
          <li id="slide_4" className="li_slide">
            <video src={assets.video_4} autoPlay loop muted></video>
            <div className="slide-snapper"></div>
            <a className="prev_slide" href="#slide_3"></a>
            <a className="next_slide" href="#slide_1"></a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default VideosGrid;
