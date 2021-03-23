import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Cards.css';
import { Button } from './Button';
// import CardItem from './CardItem';
// import { Link } from 'react-router-dom';
// import imageOne from '../images/img-1.jpg';
// import imageTwo from '../images/img-2.jpg';
// import imageThree from '../images/img-3.jpg';
// import imageFour from '../images/img-4.jpg';
// import imageFive from '../images/img-8.jpg';
// import { Link } from 'react-router-dom';

function Cards({data}) {
  return (
    <div className="Cards-container">
      <div className="heading"><h1>Locations</h1></div>
      <div className="Cards-wrapper">
        {data.map((data ,index )=>{
          return(
            <div className="Cards" key={index}>
              <img src={data.img} alt="travel"/>
              <div className="Cards-info">
                <p><i class="fas fa-map-marker-alt"></i>{data.text}</p>
                <Link to={data.path} className="btn-cards">
                  <button >View Descriptions</button>
                </Link>
              </div>
            </div>
          )
        })}
        <Button buttonStyle='btn--primary' > Read More </Button>
      </div>
    </div>
  );
}

export default Cards;
