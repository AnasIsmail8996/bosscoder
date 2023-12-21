import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import  './PeoplsPage.css'
import CardItems from './Card';

const PeoplsPage = ( ) => {
    
  return (
    <>
    <div className='Back-Color col-12 col-sm-12 col-md-12 col-lg-12 '> 
    <Container>

    <Row>
<Col sm={12} md={12} lg={12} className='Back-Para-One'>
<p>  Get inspired by someone like you </p>
</Col>
</Row>
<Row>
<Col sm={12} md={12} lg={12} className='Back-Para-two'>
<p>Who is now living their dream at top-tech companies</p>
</Col>
</Row>











 
 {/* carousel starting from here  */}

 <Carousel data-bs-theme="dark" className='caraItems-parent'>
      <Carousel.Item>
       <CardItems/>
      </Carousel.Item>


      <Carousel.Item>
       <CardItems/>
      </Carousel.Item>

      <Carousel.Item>
    
       <CardItems/>
      </Carousel.Item>
    </Carousel> 


<Row>

    <Col lg={12} md={8} sm={4} className='mt-3'>
        <div className='btn-OurPro-peoples'>
            <button > <span>READ MORE REVIEWS </span>   </button>
        </div>
        </Col>
</Row>





    </Container>
















    </div>
    </>
  )
}

export default PeoplsPage;