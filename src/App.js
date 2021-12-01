import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap';
import CheckModal from './components/CheckModal';
import DetailsModal from './components/DetailsModal';
import Web3 from "web3";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//const web3 = new Web3(Web3.givenProvider);
const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
function App() {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [data, setData] = useState("");
  const set_Value3 = (val) => {
    setValue1(val);
    setValue2(parseInt(val * 3 * 100)/100);
  }
  const set_Value4 = (val) => {
    setValue2(val);
    setValue1(parseInt(val / 3 * 100)/100);
  }
  const disconnect = async e => {
    setModalShow2(false);
    // Put Disconnect from wallet
  }
  const connectWallet = async e => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const networkId = await web3.eth.net.getId();
    web3.eth.getBalance(account).then(function(result){
      var data1 = new Object;
      data1.account = account;
      data1.chainid = networkId;
      data1.balance = result;
      setData(data1);
      setModalShow2(true);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Card
          bg="light"
          text="dark"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header> Crypto Convertor</Card.Header>
          <Card.Body>
            <Form.Label htmlFor="basic-url">NEP</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" onChange={e => set_Value3(e.target.value)} value = {value1}/>
            </InputGroup>
            <Form.Label htmlFor="basic-url">BUSD</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" onChange={e => set_Value4(e.target.value)} value = {value2} />
            </InputGroup>
            <Button variant="primary" onClick = {() => setModalShow1(true)}>
              Check Walllet Details  
            </Button>
          </Card.Body>
        </Card>
        <CheckModal show = {modalShow1} 
          connectWallet = {()=>connectWallet()} 
          onHide = {() => setModalShow1(false)}
          />

        <DetailsModal
          show={modalShow2}
          data = {data}
          disconnect = {disconnect}
          onHide={() => setModalShow2(false)}
        />
      </header>
    </div>
  );
}

export default App;
