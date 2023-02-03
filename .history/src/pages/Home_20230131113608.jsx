import React from 'react';
import '../styles/home.css';
import  { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';

const Home = () => {
  return (
    <>
     <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className='hero__content'>
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Home