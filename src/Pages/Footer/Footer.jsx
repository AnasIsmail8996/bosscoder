import  './Footer.css';
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../../assets/21024940-Media-article.png';
const Footer = () => {
  return (
    <>
    <div className='Footer-back-color col-12 col-sm-12 col-md-12 col-log-12'>


    
    <Row className='boot-col-merge' >
       <Col  xs={2} sm={6} md={8} lg={3} className='first-column'>
         <div className='FooterImg'>
          <img src={logo} alt="" />
            <p>Helping ambitious learners upskill themselves & shift to top product based companies</p>
         </div>
        
       </Col>
       <Col  xs={2} sm={6} md={8} lg={3} >
        <div className='pages'>
          <ul>
          <h6>about </h6>
            <li>about us</li>
            <li>contact us</li>
            <li>term of use</li>
            <li>refund policy</li>
            <li>privacy policy  </li>
          </ul>
        </div>
       </Col>
       <Col  xs={2} sm={6} md={8} lg={3}>
        <div className='links'>
         <ul>
          <h6>useful links</h6>
          <li> instagram</li>
          <li>facebook </li>
          <li>linkdin </li>
          <li> telegram</li>
          <li> youtube</li>
         </ul>
        </div>
       </Col>
       

      </Row>
    
 

    </div>
    </>
  )
}

export default Footer;