import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets'; // Ensure the path is correct
import './VideosGrid.css';

const VideosGrid = () => {
  const [width, setWidth] = useState(950);
  const [height, setHeight] = useState(500);
  const sliderRef = useRef(null);

  useEffect(() => {
    const liSlides = document.querySelectorAll('.li_slide');
    liSlides.forEach(slide => {
      slide.style.width = `${width}px`;
      slide.style.height = `${height}px`;
    });
  }, [width, height]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const slider = sliderRef.current;
      const slideWidth = width + 20;
      if (event.key === 'ArrowRight') {
        slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
      } else if (event.key === 'ArrowLeft') {
        slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [width]);

  return (
    <div>
      <div id="pSlider" style={{ width: `${width}px`, height: `${height}px` }}>
        <ol id="slider-container" ref={sliderRef} dir="ltr">
          <li id="slide_1" className="li_slide">
            <video src={assets.video_1} autoPlay loop muted></video>
            <div className="slide-snapper"></div>
            <a className="prev_slide" href="#slide_6"></a>
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
            <a className="next_slide" href="#slide_5"></a>
          </li>
          <li id="slide_5" className="li_slide">
            <video src={assets.video_5} autoPlay loop muted></video>
            <div className="slide-snapper"></div>
            <a className="prev_slide" href="#slide_4"></a>
            <a className="next_slide" href="#slide_6"></a>
          </li>
          <li id="slide_6" className="li_slide">
            <video src={assets.video_6} autoPlay loop muted></video>
            <div className="slide-snapper"></div>
            <a className="prev_slide" href="#slide_5"></a>
            <a className="next_slide" href="#slide_1"></a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default VideosGrid;
