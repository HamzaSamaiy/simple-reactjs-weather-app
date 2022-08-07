import React , {Component} from 'react';
import Form from './component/Form';
import Weather from './component/Weather';


const API_KEY = 'c4356226e90f95568507852530a2141f';
// url : http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component{


  state ={
    tempreature:'',
    country:'',
    city:'',
    humidity:'',
    description:'',
    error:'',
  }

  getWeather= async (e) =>{
    e.preventDefault()
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json()
    
    if(country && city){
      this.setState({


        tempreature:data.main.temp,
        country:data.sys.country,
        city:data.name,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:'',
        })
    }
    else{

      this.setState({
        
          tempreature:'',
          country:'',
          city:'',
          humidity:'',
          description:'',
          error:'Please fill all fields',
      
      })

    }
  }


  render(){
    return (
      
      <div className="Wrapper">
        
        <div className="form-container">
        <h2 className="title">Weather App</h2>
        <Form getWeather={this.getWeather} />
        <Weather 
        tempreature={this.state.tempreature}
        country={this.state.country}
        city={this.state.city}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        
        />
        <p className="copyright">Developed by © <a href="https://www.linkedin.com/in/hamza-samaiy/">Hamza Samaiy</a></p>
        </div>
        
      </div>
    );
  }
  
}

export default App;
