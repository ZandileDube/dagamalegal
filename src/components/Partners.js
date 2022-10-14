import React from 'react'
import './Partners.css'
// import galleryphoto1 from './images/dagama_logo.png'
import dagamaimg from './images/dagama_green.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Photogallery = () => {
    return (
        <div className='Partners' id='partners'>
            <div className='container'>
                
                <div className='gallery'>
                    <Container>
                        <Row>
                            {/* <Col>
                                <img src={galleryphoto1} alt='gallery1' />
                            </Col> */}
                            <Col> <img src={dagamaimg} alt='gallery2' /></Col>
                        </Row>
                        <Row>
                            <Col>The lorem ipsum is a placeholder text used in publishing and graphic design.
                                This filler text is a short paragraph that contains all the letters of the alphabet.</Col>
                            {/* <Col>
                                The lorem ipsum is a placeholder text used in publishing and graphic design.
                                This filler text is a short paragraph that contains all the letters of the alphabet.</Col> */}
                        </Row>
                    </Container>



                </div>
            </div>



        </div>
    )
}

export default Photogallery