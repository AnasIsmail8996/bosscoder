import  './BossSolution.css';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import IconsTable from '../../assets/fluent_people-community-28-filled.png';
import IconsTableTwo from '../../assets/fluent_live-24-regular.png';
import IconsTableThere from '../../assets/teenyicons_bulb-on-outline.png';
import IconsTableFour from '../../assets/jam_messages-alt.png';
import IconsTableFive from '../../assets/uil_arrow-growth.png';
import IconsTableSix from '../../assets/logo.webp';

const BossSolution = () => {
  return (
    <>
    <div className='wapper-parent'>
<Container>
<Row>
    <Col lg={12} md={12} sm={12} className='mt-5 boss-sol-Heading'>
        <p>Bosscoder end-to-end solutions</p>
    </Col>
</Row>
<Row>
    <Col lg={12} md={12} sm={12} className='mt-3 boss-sol-para'>
        <p>to give you an immersive learning experience <br /> and help you ace  in your tech career</p>
    </Col>
</Row>


<Row>
    <Col xs={7}   >

    <Table   className="table table-borderless">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={IconsTable} alt=""  className='table-imge'/>
          </td>
          <td className='table-text'> <p> World-class curriculam, designed by industry experts </p></td>
         
        </tr>
        <tr>
          <td>
<img src={IconsTableTwo} alt=""  className='table-imge'/>
          </td>
          <td className='table-text'> 
          <p>
          live classes by intructors working in top teck compies
          </p>
          </td>
          
        </tr>
        <tr>
          <td>
            <img src={IconsTableThere} alt="" className='table-imge' />
          </td>
          <td className='table-text'> <p>
          daily hand picked problems & weekly contents with quick doubbt solving
          </p>     </td>
        
        </tr>
        <tr>
          <td>
            <img src={IconsTableFour} alt=""  className='table-imge'/>
          </td>
          <td className='table-text'> <p>regular 1 : 1 Mentorship sessions and Mock interviews </p></td>
         
        </tr>
        <tr>
          <td> 
            <img src={IconsTableFive} alt=""  className='table-imge'/>
          </td>
          <td className='table-text'><p> develop industry-relevant projects based on real-world examples </p></td>
         
        </tr>
      </tbody>
    </Table>

    </Col>
    <Col xs={5} >
        <div>
            <img src={IconsTableSix} alt=""  className='col-12 col-sm-12 col-md-12 col-lg-12 boss-table-img' />
        </div>
    </Col>
</Row>
</Container>

    </div>
    </>
  )
}

export default BossSolution;