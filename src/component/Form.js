import React , {Component} from 'react';
const Form =(props)=>{
  
        return (
            <form onSubmit={props.getWeather}>
                <input type='text' name="country" placeholder='Country...'/>
                <input type='text' name="city" placeholder='City...'/>
                <button>Show weather</button>
            </form>
        )
  

}

export default Form