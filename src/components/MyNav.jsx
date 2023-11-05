import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNav = ({ setCurrentCoordinates }) => {
    return (
        <Navbar expand="md" className="bg-body-tertiary py-3">
            <Container className='d-flex justify-content-around'>
                <div>
                    <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                </div>
                <div>
                    <NavDropdown title="Select city" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'Tokyo', lat: 35.6895, lon: 139.6917 })
                        }}>Tokyo</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'New York City', lat: 40.7128, lon: -74.0060 })
                        }}>New York City</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'London', lat: 51.5074, lon: -0.1278 })
                        }}>London</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'Rome', lat: 41.8933, lon: 12.4829 })
                        }}>Rome</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'Beijing', lat: 39.9042, lon: 116.4074 })
                        }}>Beijing</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729 })
                        }}>Rio de Janeiro</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'New Delhi', lat: 28.6138, lon: 77.2090 })
                        }}>New Delhi</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'Sydney', lat: -33.8688, lon: 151.2093 })
                        }}>Sydney</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'Mexico City', lat: 19.4326, lon: -99.1332 })
                        }}>Mexico City</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            setCurrentCoordinates({ city: 'Dubai', lat: 25.2769, lon: 55.2962 })
                        }}>Dubai</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Container>
        </Navbar>
    );
}

export default MyNav;