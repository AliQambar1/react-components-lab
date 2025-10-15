import WeatherData from './WeatherData'
import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon'

const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <WeatherIcon img={props.img} imgAlt={props.imgAlt}/>
            <WeatherData
            day={props.day}
            {...props}
            />
        </div>
    )
}


export default WeatherForecast