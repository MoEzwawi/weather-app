import Container from "react-bootstrap/Container";

const date = new Date()
const year = date.getFullYear()

const MyFooter = () => {
    return (
        <Container fluid className="border-2 border-black border-top bg-body-secondary py-3 d-flex justify-content-center">
            <p className="mb-0">Weather App {year} &copy;</p>
        </Container>
    )
}

export default MyFooter