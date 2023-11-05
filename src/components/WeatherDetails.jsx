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
        tomorrow: null,
        afterTomorrow: null,
        isLoading: false,
        currentCity: {}
    }
    fetchWeatherInfo = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.currentCoordinates.lat}&lon=${this.props.currentCoordinates.lon}&units=metric&appid=1a8453ff3efc413ce93d10b8af80c2c3`)
            if (response.ok) {
                const data = await response.json()
                console.log('data', data)
                this.setState({
                    weather: data.list[0].weather[0].description,
                    temperture: data.list[0].main.temp,
                    humidity: data.list[0].main.humidity,
                    tomorrow: data.list[8].weather[0].description,
                    afterTomorrow: data.list[16].weather[0].description,
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
                                {this.state.isLoading &&
                                    <Table striped>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Spinner animation="grow" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>}
                                {!this.state.isLoading &&
                                    <Table striped>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h3>Weather</h3>
                                                </td>
                                                <td>
                                                    <h3>{this.state.weather}</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h3>Temperature</h3>
                                                </td>
                                                <td>
                                                    <h3>{this.state.temperture}°C</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h3>Humidity</h3>
                                                </td>
                                                <td>
                                                    <h3>{this.state.humidity}%</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h3>Tomorrow</h3>
                                                </td>
                                                <td>
                                                    <h3>{this.state.tomorrow}</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h3>After tomorrow</h3>
                                                </td>
                                                <td>
                                                    <h3>{this.state.afterTomorrow}</h3>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>}
                            </Col>
                        </Row>
                    </Container>}
            </>
        )
    }
}

export default WeatherDetails