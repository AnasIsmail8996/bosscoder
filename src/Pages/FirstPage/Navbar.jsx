
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Iconlogo from '../../assets/21024940-Media-article.png';

import './FirstPage.css';

const NavbarCom = () => {
  return (
    <>



    <Navbar expand="lg" className="navbar-parent col-lg-12 col-md-12 col-sm-12">
      <Container fluid>
        <Navbar.Brand href="#">
            <img className='ItemsMerge ' src={Iconlogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Programs" className='linksItems'> <p>Programs </p></Nav.Link>
            <Nav.Link href="Reviews" className='linksItems'><p>Reviews </p></Nav.Link>
            <Nav.Link href="Features" className='linksItems' ><p>Features</p></Nav.Link>
            <Nav.Link href="Teaching" className='linksItems' ><p>Teaching</p></Nav.Link>
         <div className='btn-parent'>

            <button >Free masterclasses</button>
         </div>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>


    {/* <div className='header' >
        <div className='ItemsMerge '>
<img   src={Iconlogo} alt="" />
        </div>
            

            <div className='ItemsMerge '>
                <ul className='listI '>
                    <li>Programs</li>
                    <li>Reviews</li>
                    <li>Features</li>
                    <li>Teaching</li>
                    <li >
                        <button className='btn-parent '>Free masterclasses</button>
                        </li>
                </ul>
            </div>

    </div> */}


    
    </>
  )
}

export default NavbarCom;
