import React ,{ useState } from "react";
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios";
//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'

export default function RegisterPage() {
    const[clinicname,setClinicname]=useState("");
    const[address,setAddress]=useState("");
    const[area,setArea]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[phoneno,setPhoneno]=useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   function submitdata(event) {
        event.preventDefault();
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
    
        "clinicname": clinicname,
        "address":address,
        "phoneno":phoneno,
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
    
      
      fetch("http://localhost:8080/userses", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setShow(true);

    }
            
     
  


    return (
        <div>
            <div className="logReg-main">
                <Row>
                    <Col className=""></Col>
                    <Col>
                        <div className="login-cluster">
                            <div className="login-cluster-inner">
                                <Form method="POST" onSubmit={submitdata}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Clinic Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Clinic Name" onChange ={(e)=>      
                                                                      setClinicname(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="textarea" placeholder="Enter Address" onChange ={(e)=>setAddress(e.target.value)} />
                                    </Form.Group>
                                   

                                    <Form.Select>
                                        <option selected>- Select your Area -</option>
                                        <option value="1" onChange ={(e)=>setArea(e.target.value)}>North</option>
                                        <option value="2" onChange ={(e)=>setArea(e.target.value)}>East</option>
                                        <option value="3" onChange ={(e)=>setArea(e.target.value)}>Central</option>
                                        <option value="4" onChange ={(e)=>setArea(e.target.value)}>West</option>
                                    </Form.Select>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Contact Number" onChange ={(e)=>setPhoneno(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mt-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Username"  onChange ={(e)=>setUsername(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange ={(e)=>setPassword(e.target.value)} />
                                    </Form.Group>

                                    <Button variant="outline-info" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                                <div className="login-register-cluster">
                                    <p>Already have an Account?</p>
                                    <Link to="/">
                                        <p>Log in here!</p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
            <MainFooter />
        </div>
    )
}
