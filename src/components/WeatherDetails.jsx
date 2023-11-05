import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';
import imgUrls from '../data/imageUrls.json'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

class WeatherDetails extends Component {
    state = {
        weather: null,
        temperture: null,
        humidity: null,
        isLoading: false,
        currentCity: {}
    }
    fetchWeatherInfo = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.currentCoordinates.lat}&lon=${this.props.currentCoordinates.lon}&units=metric&appid=fdf68682559def6fde55c35e3924908e`)
            if (response.ok) {
                const data = await response.json()
                console.log('data', data)
                this.setState({
                    weather: data.weather[0].main,
                    temperture: data.main.temp,
                    humidity: data.main.humidity,
                    isLoading: false
                })
            } else {
                throw new Error('Error retrieving data')
            }
        } catch (error) {
            console.log(error)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentCoordinates.city !== this.props.currentCoordinates.city) {
            this.setState({
                currentCity: imgUrls.filter(obj => obj.city === this.props.currentCoordinates.city)[0],
                isLoading: true
            })
            setTimeout(this.fetchWeatherInfo, 500)
        }
    }
    render() {
        return (
            <>
                {!this.state.weather &&
                    <Container className="mt-3">
                        <Row>
                            <Col>
                                <img src="https://pathwayshealth.org/wp-content/uploads/2023/08/images-1.png" width={'180px'} height={'180px'} alt="sun" />
                            </Col>
                            <Col>
                                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1684366/cloud-with-rain-clipart-md.png" width={'180px'} height={'180px'} alt="rain" />
                            </Col>
                        </Row>
                        <Alert variant="success" className="mb-4 mt-1">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>
                                Welcome to Weather App - Your Ultimate Destination for Accurate Weather Forecasts!

                                Experience real-time weather updates for cities worldwide. Whether you're planning a trip, scheduling your day, or simply curious about the weather in different parts of the globe, Weather App has you covered. Start exploring and stay ahead with Weather App!
                            </p>
                            <hr />
                            <h4 className="mb-0">
                                Please select a city to view the weather forecast!
                            </h4>
                        </Alert>
                    </Container>}
                {this.state.weather &&
                    <Container>
                        <Row>
                            <Col>
                                <h2>{this.state.currentCity.city}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pe-0">
                                <img src={this.state.currentCity.img} alt="city" width={'100%'} height={'100%'} />
                            </Col>
                            <Col className="ps-0">
                                <img src={this.state.currentCity.flag} alt="flag" width={'100%'} height={'100%'} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table striped bordered>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex justify-content-around">
                                                    <h3>Weather</h3>
                                                    {this.state.isLoading &&
                                                        <Spinner animation="grow" />}
                                                    {!this.state.isLoading &&
                                                        <h3>{this.state.weather}</h3>}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex justify-content-around">
                                                    <h3>Temperature</h3>
                                                    {this.state.isLoading &&
                                                        <Spinner animation="grow" />}
                                                    {!this.state.isLoading &&
                                                        <h3>{this.state.temperture}°C</h3>}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex justify-content-around">
                                                    <h3>Humidity</h3>
                                                    {this.state.isLoading &&
                                                        <Spinner animation="grow" />}
                                                    {!this.state.isLoading &&
                                                        <h3>{this.state.humidity}%</h3>}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>}
            </>
        )
    }
}

export default WeatherDetails