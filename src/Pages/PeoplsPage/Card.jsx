import { Col, Row, Container } from 'react-bootstrap';
import './PeoplsPage.css';

import Card from 'react-bootstrap/Card';
import cardIcon from '../../assets/cardIcon.png';
const CardItems = () => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Row>

    <Col xs={6}>
      <Card.Img variant="center" src={cardIcon} />
    </Col>
    <Col xs={6}>
    <h3>Mannu</h3>
  <p>UI/UX Designer</p>
    </Col>
        </Row>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </>
  )
}

export default CardItems;