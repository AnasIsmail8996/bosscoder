import './FirstPage.css';
import NavbarCom from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FirstPage = () => {
  return (
    <>
    <header>
        <NavbarCom/>
    </header>
     

<section>
    <div className='back-color  col-12 col-sm-12 col-md-12 col-lg-12'>

<Container>
      <Row>
        <Col className='heading ' xs={10}  sm={6} md={6} lg={12}  >
        <p >Grab your <span>Dream </span> tech <br /> offer today</p>
        <ul>
            <li>A highly structured, personalized and <br />
                 guided word-class program</li>
           <li>Designed by industry expertst</li>
           <li>That will make you the best software  developer <br /> out there</li>
           <li>For ambition learners, who don’t want <br /> to settle for anything less in their tech <br />
            careers</li>

        </ul>
        <div className='btn-apply'>
            <button >Apply now</button>
        </div>
        </Col>
        <Col  sm={4} md={8} lg={12}>
        <div className='back-img-color '>
        <div className='img-F-user '>
        </div>
        </div>
        </Col>
      </Row>
</Container>
    </div>
</section>

    </>
  )
}

export default FirstPage;