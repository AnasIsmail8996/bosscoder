import  './Success.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompaniesLigo from '../../assets/companies-ligos.png';
const Success = () => {
  return (
<>
    <div>
       <Container>
        <Row xs={1} lg={12}  className='mt-5'>
        <Col  sm={12} md={12} lg={12} className='heading-sucess'>
            <p>100+ Successful Alumni working at top product-                     Based company</p>
        </Col>
      </Row>
        <Row xs={1} lg={12}  className='mt-5'>
        <Col  sm={12} md={12} lg={12} className='img-sucess'>
            <img src={CompaniesLigo} alt="" />
        </Col>
      </Row>
        
       </Container>
    </div>
</>
  )
}

export default Success;