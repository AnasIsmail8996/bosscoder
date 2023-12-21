import  './Support.css';
import { Container, Row, Col } from 'react-bootstrap';
import SupportCard from './SopportCard';
const Support = () => {
  return (
    <>
    <div className='support-back-color col-12 col-sm-12 col-md-12 col-lg-12  '>
 
 <Container >
    <Row  >
        <Col lg={12} md={12} sm={12}>
        <div className='sopport-heading'>
            <p>placement and career support</p>
        </div>
        </Col>
    </Row>
    <Row  >
        <Col lg={12} md={12} sm={12}>
        <div className='sopport-para'>
            <p>helping students get exposed to  a world opportunitities</p>
        </div>
        </Col>
    </Row>

    <Row>
        <Col sm={12}  md={4} lg={3} className=' '>
          <SupportCard />
        </Col>
        <Col sm={12} md={4} lg={3} className=' '> <SupportCard/></Col>
          <Col sm={12} md={3} lg={3} className=' '> <SupportCard/></Col>
        <Col sm={12} md={4} lg={3} className=' '> <SupportCard/></Col>
      </Row>


      <Row>
        <Col lg={12} md={12} sm={12}>
        <div className='support-btn'>
        <button><span> know more</span> </button>
        </div>
        </Col>
      </Row>
 </Container>
   

    </div>
    </>
  )
}

export default Support;