import React from 'react';

const Weather = (props) => {
    
        return (
            <div className="info">
               

                {
                    props.tempreature && 
                    <p className="info-key">Tempreature: 
                        <span className="info-value"> {props.tempreature} </span>
                    </p>
                }
                {
                    props.country && 
                    <p className="info-key">Country:
                    <span className='info-vlaue'> {props.country} </span> 
                    </p>
                }
                {
                    props.city && 
                    <p className='info-key'> City:
                        <span className='info-value'>{props.city}</span> 
                    </p>
                }
                {
                    props.humidity && 
                    <p className='info-key'>Humidity:
                        <span className='info-value'>{props.humidity}</span>
                    </p>
                }
                {
                    props.description && 
                    <p className='info-key'>Description:
                        <span className='info-vlaue'> {props.description} </span>
                    </p>
                }

                {
                   props.error && 
                   <p className='info-key'>
                    <span className='info-value'>{props.error}</span>
                    </p>
                }
                
                
                
                
              
            </div>
        )
  

}

export default Weather