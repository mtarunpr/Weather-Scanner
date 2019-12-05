import React from "react";

// Creating Weather component to display weather information
class Weather extends React.Component{

    render(){
        // Uses regular HTML tags to build up a customized and reusable form component
        // Defines props for city {this.props.city}, temperature {this.props.temperature}, etc.
        //  that will be passed in when the component is called in the "render" function of another file
        // In App.js, see this component being used with props being passed in!
        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temp_min && this.props.temp_max && <p className="weather__key">Temperature: 
                        <span className="weather__value"> Min: {this.props.temp_min} &deg;C, Max: {this.props.temp_max} &deg;C </span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity: 
                        <span className="weather__value">  {this.props.humidity}%</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Conditions:  
                        <span className="weather__value">  {this.props.description}                       
                        <img src={"http://openweathermap.org/img/wn/" + this.props.icon + "@2x.png"}></img>
                        </span> 
                    </p>
                }

                {
                    this.props.wind_speed && <p className="weather__key">Wind Speed:  
                    <span className="weather__value">  {this.props.wind_speed}</span>
                    </p>
                }

                {
                    this.props.cloudliness && <p className="weather__key">Cloudliness:  
                    <span className="weather__value">  {this.props.cloudliness}%</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;