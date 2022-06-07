import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../App.css';
import 'react-slideshow-image/dist/styles.css'
const slideImagesArchitecturalRendering = [
  'images/Architecturalrenderings/Thumbnail.jpg',
  'R.jpg',
  'R.jpg'
];

const slideImagesDeckDrawings = [

];

const slideImagesFloorPlan = [

];

const slideImagesInteriorRenovation = [

];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': ` url(  ${slideImagesArchitecturalRendering[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
          <div style={{'backgroundImage': ` url(  ${slideImagesArchitecturalRendering[0]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
          <div style={{'backgroundImage': ` url(  ${slideImagesArchitecturalRendering[0]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>

      </div>
    )
};

export default Slideshow;