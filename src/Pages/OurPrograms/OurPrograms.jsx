import  './OurPrograms.css';
import { Container, Col,Row } from 'react-bootstrap';
import ArrowIcon from '../../assets/entypo_arrow-long-right.png';
import OfficeImg from '../../assets/ofiice-img.png';
const OurPrograms = () => {
  return (
    <>
    <div>
        <Container>

    <Row xs={1} lg={12}>
        <Col  className='mt-5 OurProgramme-heading' lg={12} md={12} sm={12}>
          <p>Our Programs</p>
        </Col>
      </Row>
    <Row xs={1} lg={12}>
        <Col  className='mt-5 OurProgramme-para' lg={12} md={12} sm={12}>
          <p>
          Ace Your Skills In Problem Solving In DSA, System Design And Developement
          </p>
        </Col>
      </Row>

{/* Card section staeting from here */}
<Row xs={1} lg={12}>
    <div className='wrapper-card'>
        <Col lg={12} md={12} sm={5} className='img-card mt-5'>
        <img src={OfficeImg} alt="" />
        </Col>
        <Col lg={12} md={12} sm={12} className='img-card-para-one mt-3'>
        <p>For Collage Students</p>
        </Col>
       
        <Col lg={12} md={12} sm={12} className='img-card-para-two mt-3'>
        <p>Who want to rocket-start their career and get placed in thier dream companies</p>
        </Col>
        <Col lg={12} md={8} sm={4} className='mt-3'>
        <div className='btn-OurPro'>
            <button > <span>View program  </span> <img src={ArrowIcon} alt="" className='ArrowIcon' />  </button>
        </div>
        </Col>

    </div>
</Row>

        </Container>

    </div>
    </>
  )
}

export default OurPrograms;