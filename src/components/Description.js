import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Description.css';
const Description = ({dataDesc}) => {
    return (
        <>
            <div className='desc-container'>
                <div className="location"><h1>Việt Nam (VietNam)</h1></div>
                    {dataDesc.map((dataDesc, index)=>{
                        return(
                            <div className='desc-wrap'>
                                <div className='desc-info' key={index}>
                                    <Link className='title' to='/'><h1>{dataDesc.title}</h1></Link>
                                    <p className='date'>{dataDesc.date}</p>
                                    <img src={dataDesc.img} alt="desc"/>
                                    <p className className='text'>{dataDesc.text}</p>
                                    <Link className='btn-desc' to='/'>
                                        <button>Read more</button>
                                    </Link>
                                </div>
                            </div>    
                        )
                    })}  
            </div>
        </>
    )
}

export default Description
