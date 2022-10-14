import React from 'react'
import { BackSide, Flippy, FrontSide } from 'react-flippy'
import Employment from './images/employment.jpg'
import Injury from './images/injury.jpg'
import Intellectual from './images/Intellectual.jpg'
import Migration from './images/migration.jpg'
import Taxation from './images/taxation.jpg'
import Corporate from './images/Corporate.jpg'
import CorporateLaw from './images/Corporate law.png'
import Dispute from './images/dispute.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Expertise.css'


const FlippyStyle = {
    width: '200px',
    height: '300px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center'


}

function Expertise() {
    return (
<div className='Expertise' id='expertise'>
        <Container>

            <h1>Our Practise areas</h1>

            <Row className='add-space'>
                <Col>
                    <Flippy id='flippy' className='flippy'
                        style={FlippyStyle}>
                        <FrontSide
                         style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}
                        >
                            <img src={Dispute} alt='Dispute' />
                            <p className='fronttext' >

                            Dispute <br/> Resolution <br/> & Litigation
                            </p>

                            <p className='learn'>Learn More </p>
                        </FrontSide>
                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>

                <Col>
                    <Flippy
                        style={FlippyStyle}>
                        <FrontSide style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={Employment} alt='Employment'  />
                            <p className='fronttext'style={{ textAlign: 'center'}}>Employment & Labour <br/>Law</p>
                            <p  className='learn'>Learn More </p>
                        </FrontSide>
                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>
               
                <Col>
                    <Flippy
                        style={FlippyStyle}>
                        <FrontSide style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={Corporate} alt='Corporate' />
                            <p className='fronttext'>Corporate Finance</p>
                            <p  className='learn'>Learn More </p>
                        </FrontSide>

                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>

                <Col>
                    <Flippy
                        style={FlippyStyle}>
                        <FrontSide style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={Taxation} alt='Taxation' />
                            <p className='fronttext'>Taxation</p>
                            <p  className='learn'>Learn More </p>
                        </FrontSide>

                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>
            </Row >


            <Row className="add-space">
                <Col>
                    <Flippy
                        style={FlippyStyle}>
                        <FrontSide style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={CorporateLaw} alt='Corporate'  />
                            <p className='fronttext'>Corporate & Commercial Law</p>
                            <p  className='learn'>Learn More </p>
                        </FrontSide>
                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>

                <Col>
                    <Flippy
                        style={FlippyStyle}>
                        <FrontSide style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={Injury} alt='Injury' />
                            <p className='fronttext'>Damages & Injury</p>
                            <p  className='learn'>Learn More </p>
                        </FrontSide>

                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>
                <Col>
                    <Flippy
                        style={FlippyStyle}>
                        <FrontSide style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={Intellectual} alt='Intellectual' />
                            <p className='fronttext'>Intellectual Property</p>
                            <p  className='learn'>Learn More </p>
                        </FrontSide>

                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>
                <Col>
                    <Flippy
                        style={FlippyStyle}>
                        <FrontSide style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            // alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={Migration} alt='Migration' />
                            <p className='fronttext'>Emigration & Immigration</p>
                            <p  className='learn'>Learn More </p>
                        </FrontSide>

                        <BackSide style={{
                            backgroundColor: '#13ab9c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p className='backtext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </BackSide>
                    </Flippy>
                </Col>
            </Row>


        </Container>

        </div>
    )
}

export default Expertise
