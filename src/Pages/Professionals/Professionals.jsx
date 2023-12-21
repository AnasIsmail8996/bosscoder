import './Professionals.css';
import { Container, Col,Row } from 'react-bootstrap';
import ArrowIcon from '../../assets/entypo_arrow-long-right.png';
import OfficeImg from '../../assets/Office-two.png';
const Professionals = () => {
  return (
    <>
 <div>
        <Container>

  

{/* Card section staeting from here */}
<Row xs={1} lg={12}>
    <div className='wrapper-card'>
        <Col lg={12} md={12} sm={5} className='img-card mt-5'>
        <img src={OfficeImg} alt=""  className='mt-5'/>
        </Col>
        <Col lg={12} md={12} sm={12} className='img-card-para-one-new mt-3'>
        <p>For Working Professionals</p>
        </Col>
       
        <Col lg={12} md={12} sm={12} className='img-card-para-two mt-3'>
        <p>Who wish to shift to top product based companies and ace thier tech careers</p>
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

export default Professionals;