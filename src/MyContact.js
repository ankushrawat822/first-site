import React from 'react';
import { Form, Button , Row , Col , FloatingLabel} from 'react-bootstrap';

const MyContact = () => {
    return (
        <>
        <div  className="my-5 "> 
        <h1 className="text-center "  >Contact Me</h1>
        <hr  className="w-25 mx-auto" />
        </div>

            <div className="container ">
                <div className='row'> 
                    <div className='col-xxl-10 col-12 col-md-10   mx-auto'> 
                    <Form>
                    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
<br />

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form>
  <Row>
    <Col xs={7}>
      <Form.Control placeholder="City" />
    </Col>
    <Col>
      <Form.Control placeholder="State" />
    </Col>
    <Col>
      <Form.Control placeholder="Zip" />
    </Col>
  </Row>
</Form>

<>

  <FloatingLabel className="my-3" controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px'  }}
    />
  </FloatingLabel>
</>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="submit">

    Submit
  </Button>
</Form>
<br />
<br />
<br />
                   </div>
                
                </div>

            </div>

            <footer className="bg-secondary text-center text-white "> 
  <p> created by Ankush Rawat </p>
</footer>

        </>
    )
}


export default MyContact;