import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Modal, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
function DetailsModal(props) {
    return (
      <Modal
        show ={props.show}
        onHide = {props.onHide}
        size="md"
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Wallet Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <ListGroup>
              <ListGroup.Item> 
                <Row >
                  <Col md={3}>Key</Col>
                  <Col md={{ span: 3, offset: 6 }}>Value</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item> 
                <Row >
                  <Col md={3}>Account</Col>
                  <Col md={{ span: 3, offset: 2 }}>{props.data.account}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item> 
                <Row >
                  <Col md={3}>Chain ID</Col>
                  <Col md={{ span: 3, offset: 6 }}>{props.data.chainid}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item> 
                <Row >
                  <Col md={3}>Balance</Col>
                  <Col md={{ span: 3, offset: 6 }}>{props.data.balance}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button style = {{width:"100%", backgroundColor:"#990000"}}variant="secondary" onClick={props.disconnect}>DisConnect</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default DetailsModal;