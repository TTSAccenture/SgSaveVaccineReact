import React,{useState} from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'

export default function LoginPage(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const [show, setShow] = useState(false);

    function submitdata(event) {
        event.preventDefault();
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
    
        "username": username,
        "password":password
      
    
        });
    var requestOptions = {
        method: 'POST',       
        redirect: 'follow',
        headers: myHeaders,
        body: raw,
      };
      
      fetch("http://localhost:8080/login",  { mode: 'no-cors'})
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setShow(true);
        setUsername(username);
        <Link to='{`loginpage/${username}`}'></Link>

    }

    return (
        <div>
            <div className="logReg-main">
                <Row>
                    <Col className=""></Col>
                    <Col>
                        <div className="login-cluster">
                            <div className="login-cluster-inner">
                                <Form  method="POST" onSubmit={submitdata}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text"  placeholder="Enter Username"  onChange ={(e)=>      
                                                                      setUsername(e.target.value)}><Link to={`\${username}`}></Link></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="outline-info" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                                <div className="login-register-cluster">
                                    <p>Want to be part of the SaveVaccine Force?</p>
                                    <Link to="/register">
                                        <p>Register your Clinic here!</p>
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
