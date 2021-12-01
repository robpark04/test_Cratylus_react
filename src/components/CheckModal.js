import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Modal, Button} from 'react-bootstrap';
function CheckModal(props) {
   return (
    <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Wallet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style = {{color:"red"}}>Wallet not connected. Please click the "Connect Now" button below.</Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col>
                <Button style = {{width : "100%"}} variant="primary" onClick={props.connectWallet}>
                    Connect
                </Button>
              </Col>
              <Col>
                <Button  style = {{width:"100%"}} variant="secondary" onClick={props.onHide}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
   );
}
  export default CheckModal;