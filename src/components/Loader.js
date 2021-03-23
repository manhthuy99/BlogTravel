import React, { useState , useEffect } from 'react';
import '../css/Loader.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const Loader = () => {
    const [loading , setLoading ] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        } , 8000)
    }, []) 
    return (
        <div className="loading">
            {
                loading  ?(
                <ClimbingBoxLoader color={"#F37A24"} loading={loading}  size={30} />
                ):(<App/>)
            }
        </div>
    )
}

export default Loader
