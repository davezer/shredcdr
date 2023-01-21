import React, {useState} from 'react';
import { Navbar, Container, Nav, Modal, Tab } from 'react-bootstrap';

function Navigation (props) {
  const [showModal, setShowModal] = useState(false);

  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;



  return (

    <>
    <Navbar className="navbar" sticky="top" id="navbar" bg="" expand="md">
    <Container className="brand-con">
      <Navbar.Brand className ="brand" href="/">CDR</Navbar.Brand>
    </Container>
    <Container className="nav-links-con">  
      <Nav className="nav-links">
        <ul className="nav-item" >
        {pages.map(Page => (
          <li
            className={`mx-5 ${
              currentPage.name === Page.name && 'navActive'
              }`}
            key={Page.name}
            >
            <span
              onClick={() => setCurrentPage(Page)}
            >
              {(Page.name)}
            </span>
          </li>
          
          ))}
        </ul>
      </Nav>
      
    </Container>
  </Navbar>
  <Modal
        {...props}
        size='lg'
        color='#262626'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
        centered>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title className="modal-title" id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Get A Quote</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Tab.Content>
              
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

  </>
    
      
    
  );
}

export default Navigation;