import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const slideImages = [
  {
    url: 'images/Architecturalrenderings/Thumbnail.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/Architecturalrenderings/1.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/Architecturalrenderings/2.jpg',
    caption: 'Slide 3'
  },
];

const ArchitectImages = [
  {
    url : 'images/Architecturalrenderings/Thumbnail.jpg'
  },
  {
    url : 'images/Architecturalrenderings/1.jpg'
  },
  {
    url : 'images/Architecturalrenderings/2.jpg'
  },
  {
    url : 'images/Architecturalrenderings/3.jpg'
  },
  {
    url : 'images/Architecturalrenderings/4.jpg'
  },
  {
    url : 'images/Architecturalrenderings/5.jpg'
  },
  {
    url : 'images/Architecturalrenderings/6.jpg'
  },
  {
    url : 'images/Architecturalrenderings/7.jpg'
  },
  {
    url : 'images/Architecturalrenderings/8.jpg'
  },
  {
    url : 'images/Architecturalrenderings/9.jpg'
  },
  {
    url : 'images/Architecturalrenderings/10.jpg'
  },
  {
    url : 'images/Architecturalrenderings/11.jpg'
  },
  {
    url : 'images/Architecturalrenderings/12.jpg'
  },
  {
    url : 'images/Architecturalrenderings/13.jpg'
  },
  {
    url : 'images/Architecturalrenderings/14.jpg'
  },
  {
    url : 'images/Architecturalrenderings/15.jpg'
  },
  {
    url : 'images/Architecturalrenderings/16.jpg'
  },
  {
    url : 'images/Architecturalrenderings/17.jpg'
  },
  {
    url : 'images/Architecturalrenderings/18.jpg'
  },
]

const DeckImage = [
  {
    url : 'images/DECKDRAWINGS/Thumbnail.jpg'
  },
  {
    url : 'images/DECKDRAWINGS/1.jpg'
  },
  {
    url : 'images/DECKDRAWINGS/2.jpg'
  },
  {
    url : 'images/DECKDRAWINGS/3.jpg'
  }
]

const  FloorImage = [
  {
    url : 'images/Floorplan/Thumbnail.jpg'
  },
  {
    url : 'images/Floorplan/1.jpg'
  },
  {
    url : 'images/Floorplan/2.jpg'
  },
  {
    url : 'images/Floorplan/3.jpg'
  },
  {
    url : 'images/Floorplan/4.jpg'
  },
  {
    url : 'images/Floorplan/5.jpg'
  },
  {
    url : 'images/Floorplan/6.jpg'
  },
  {
    url : 'images/Floorplan/7.jpg'
  },
  {
    url : 'images/Floorplan/8.jpg'
  },
  {
    url : 'images/Floorplan/9.jpg'
  },
  {
    url : 'images/Floorplan/10.jpg'
  },
  {
    url : 'images/Floorplan/11.jpg'
  },
  {
    url : 'images/Floorplan/12.jpg'
  }
]

const Interior = [
  {
    url : 'images/Interior-renovations/Thumbnail.jpg'
  },
  {
    url : 'images/Interior-renovations/1.jpg'
  },
  {
    url : 'images/Interior-renovations/2.jpg'
  }
]

function SlideShowFloor(){
  return (<div className="slide-container">
  <Slide>
   {FloorImage.map((slideImage, index)=> (
      <div className="each-slide" key={index}>
        <div style={{'backgroundImage': `url(${slideImage.url})`}}>

        </div>
      </div>
    ))} 
  </Slide>
</div>);
}

function SlideShowInterior() {
  return (<div className="slide-container">
  <Slide>
   {Interior.map((slideImage, index)=> (
      <div className="each-slide" key={index}>
        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
        </div>
      </div>
    ))} 
  </Slide>
</div>);
}

function SlideShowArchitect() {
  return (<div className="slide-container">
  <Slide>
   {ArchitectImages.map((slideImage, index)=> (
      <div className="each-slide" key={index}>
        <div style={{'backgroundImage': `url(${slideImage.url})`}}>

        </div>
      </div>
    ))} 
  </Slide>
</div>);
}

function SlideShowDeck() {
  return (<div className="slide-container">
  <Slide>
   {DeckImage.map((slideImage, index)=> (
      <div className="each-slide" key={index}>
        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
        </div>
      </div>
    ))} 
  </Slide>
</div>);
}

const Slideshow = (props) => {
  let value = '';
  switch(props.type){
    case 'Architect':
      value = SlideShowArchitect();
      break;
    case 'Deck':
      value = SlideShowDeck();
      break;
    case 'Floor':
      value = SlideShowFloor();
      break;
    case 'Interior':
      value = SlideShowInterior();
      break;
    default:
      return 'No props.type defined in SlideShow class';
  }

  return value;

  
}

export default Slideshow;