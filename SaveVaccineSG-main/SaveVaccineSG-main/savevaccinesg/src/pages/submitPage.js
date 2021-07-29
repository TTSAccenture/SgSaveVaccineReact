import React,{useState} from 'react'
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'
export default function SubmitPage() {
    const[clinicname,setClinicname]=useState("");
    const[address,setAddress]=useState("");
    const[phno,setPhno]=useState("");
    const[area,setArea]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   function submitdata(event) {
        event.preventDefault();
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
    
        "clinicname": clinicname,
        "address":address,
        "area": area,
        "username": username,
        "password": password
    
        });
    var requestOptions = {
        method: 'POST',       
        redirect: 'follow',
        headers: myHeaders,
        body: raw,
      };
      
      fetch("http://localhost:8080/registers", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setShow(true);

    }
            


    return (
        <div>
            <Row>
                <Col xs={1}><MainNavbar /></Col>
                <Col>
                    <div className="submit-mainface">
                        <Row>
                            <Col xs={2} ></Col>

                            <Col>
                                {/* TITLE */}
                                <div className="request-title">
                                    <p>Submit Doses</p>
                                </div>
                                <div className="submit-body">
                                    {/* CLINIC DETAILS */}
                                    <Row>
                                        <Col md={9}>
                                            <Card className="CardShadow submit-card">
                                                <div className="submit-body-confirm-title">
                                                    <p>Confirm Details</p>
                                                </div>
                                                <div className="submit-form">
                                                    <Form>
                                                        <Form.Group as={Row} className="mb-5">
                                                            <Form.Label column sm={2}>Clinic Name: </Form.Label>
                                                            <Col>
                                                                <Form.Control type="text" disabled />
                                                            </Col>
                                                        </Form.Group>

                                                        <Form.Group as={Row} className="mb-5">
                                                            <Form.Label column sm={2}>Clinic Address: </Form.Label>
                                                            <Col>
                                                                <Form.Control type="text" disabled />
                                                            </Col>
                                                        </Form.Group>
                                                        <Row>
                                                            <Col>
                                                                <Form.Group as={Row} className="mb-5">
                                                                    <Form.Label column sm={2}>Clinic ID: </Form.Label>
                                                                    <Col>
                                                                        <Form.Control type="text" disabled />
                                                                    </Col>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group as={Row} className="mb-5">
                                                                    <Form.Label column sm={2}>Contact: </Form.Label>
                                                                    <Col>
                                                                        <Form.Control type="text" disabled />
                                                                    </Col>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                            </Card>
                                        </Col>

                                        <Col>
                                            <Card className="submit-submit-card CardShadow">
                                                <div className="submit-submit">
                                                    <div className="submit-body-confirm-title">
                                                        <p>Amount to Submit</p>
                                                    </div>
                                                    <div className="submit-submit-form">
                                                        <Row>
                                                            <Col></Col>
                                                            <Col xs={6}>
                                                                <div>
                                                                    <Form>
                                                                        <Form.Group className="mb-3">
                                                                            <Form.Control type="number" placeholder="Enter Amount" size="lg" />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                                <div>
                                                                    <Button className="submit-submit-button">Submit</Button>
                                                                </div>
                                                            </Col>
                                                            <Col></Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


            <MainFooter />
        </div >
    )
}
