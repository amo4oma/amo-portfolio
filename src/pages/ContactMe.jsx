import React, {useState,Linking} from 'react';
import { Container, Row, Col,Form , Button} from "react-bootstrap";
 
import "../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/Layout';

function ContactMe(){
  
   const [name, setname] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [isTrue, setIstrue]= useState(false)
   const [errMsg, setErrMgs]= useState(true)
   const [btn, setBtn] =useState("send");

    function handelName(e){
        const newName = e.target.value;
        setname(newName);
    }
    function handelEmail(e){
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    function handelMessage(e){
        const newMessage = e.target.value;
        setMessage(newMessage);
    }
    function handelClick(e){
        if (name ==='' || email==='' || message === ''){
            setErrMgs(false)
            e.preventDefault();
        } else{
            setErrMgs(true)
// https://github.com/github/fetch
fetch("https://formsubmit.co/ajax/almahdiam@aol.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        message: message,
        email:email,
    })
})
    .then(response =>response.json())
    .then(setBtn('Sending...'))
    .then(data => setIstrue(data.success))
    .catch(error => console.log(error))
        console.log(name + " " + email +" " + message)
        e.preventDefault();
    }}
    return (
        <Layout>
        <Container fluid className="about-section ">
        
        <Container className="from-container mb-5">
       
    <h1>Contact Me  </h1>
    
    <Container className="d-flex flex-column">
      {
          !isTrue ?  <Form>
     <label>Name</label>
    <Form.Control type="text" placeholder="Enter your name" onChange={handelName} value={name}/>
    <label>Email</label>
    <Form.Control type="email" onChange={handelEmail} placeholder="Enter your Email"  />
    <label>Phone Number</label>
    <Form.Control type="number" onChange={handelEmail} placeholder="Enter your Phone Number" maxLength="10"  />
    <label>Message</label>
    <Form.Control as="textarea" onChange={handelMessage} type="text" placeholder="Enter your message"  />
    {
        !errMsg ?  <h6 className="error-msg">please fill in the required fields</h6>: null
         
    }
    <Button variant="primary mt-5 mb-4" type="submit" onClick={handelClick} >{btn}</Button>
    

    </Form> : <h1 className="tqmessaga">Thank you! your message has beed sent successfully </h1>
      }  
  
    </Container>
 
    </Container>
    
    </Container>
    </Layout>
    );
}

export default ContactMe;