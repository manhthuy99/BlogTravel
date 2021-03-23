import React from 'react';
import '../css/Corona.css';
import cooking from "../images/cooking.png";
import washing from "../images/washing-hand.png";
import mask from "../images/medical-mask.png";
import fever from "../images/fever.png";
import aidKid from "../images/first-aid-kit.png"
import flight from "../images/flight.png";
import cold from "../images/cold.png";
import viruss from "../images/virus.png"


const Corona = () => {
    return (
        <div className="corona">
            <div className="corona__container">
                <div className="corona__box">
                    <div className="corona__content">
                        <img src={viruss} alt="corona" />
                        <h1>ATTENTION VIRUSS COVID-19</h1>
                    </div>
                </div>
                <div className="corona__box">
                    <div className="corona__content">
                        <img src={washing} alt="corona" />
                        <p>Wash hand with soap and water after touching animals and animals products</p>
                    </div>
                </div>
                <div className="corona__box">
                    <div className="corona__content">
                        <img src={cold} alt="corona"/>
                        <p>When coughing and sneezing cover nose and noise with flexed elbow or tissue </p>
                    </div>
                </div>
                <div className="corona__box">
                    <div className="corona__content">
                        <img src={flight} alt="corona"/>
                        <p>Avoid travel and if you have a fever and cough  </p>
                    </div>
                </div>
                <div className="corona__box">    
                    <div className="corona__content">
                        <img src={aidKid} alt="corona"/>
                        <p>If you have a fever , cough and difficult breathing seek medical care early </p>
                    </div>
                </div>
                <div className="corona__box">    
                    <div className="corona__content">
                        <img src={mask} alt="corona"/>
                        <p>If you are coughing and sneezing , wear a mark and must know you how to use it and dispose of post properly</p>
                    </div>
                </div>    
                <div className="corona__box">
                    <div className="corona__content">
                        <img src={cooking} alt="corona"/>
                        <p>Eat only well cooked food </p>
                    </div>
                </div>    
                <div className="corona__box">
                    <div className="corona__content">
                        <img src={fever} alt="corona"/>
                        <p>Avoid close contact with animals that are sick </p>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Corona
