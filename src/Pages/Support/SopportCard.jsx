import  './Support.css';
import { Container, Row,Col } from 'react-bootstrap';
import UserImages from '../../assets/user-images.png'
const SopportCard = () => {
  return (
    <>
    <Container>
<Row>
<Col lg={12} md={6} sm={12} className='mt-5'>
    <div className='support-card'>
      <div className='support-img'>
     <img src={UserImages} alt="" />
      </div>
      <div className='support-para'>
     <strong>Extensive Support by Alumni-Mentor Network</strong>
     <p>
Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies   </p>
      </div>

    </div>
</Col>
</Row>



    </Container>
    </>
  )
}

export default SopportCard;