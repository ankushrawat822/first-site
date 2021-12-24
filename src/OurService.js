import React from 'react';
import { Card , Button } from 'react-bootstrap';

const OurService = () => {
    return (
        <>
 
     <div className="container mx-auto  bg-light"> 
     <h1  className="text-center ">Our Service</h1>
     <hr  className="w-25 mx-auto"  />
        <div className="row my-5  " >  
            <div className=" col-md-4 col-10 col-xxl-4 mx-auto" > 
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="left" src="https://source.unsplash.com/random/286x180" fluid />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            
            
            </div>

            <div className=" col-md-4 col-10 col-xxl-4 mx-auto " > 
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="left" src="https://source.unsplash.com/random/286x180" fluid />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            
            
            </div>


            <div className=" col-md-4 col-10 col-xxl-4 mx-auto " > 
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="left" src="https://source.unsplash.com/random/286x180" fluid />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            
            </div>

            <div className="col-xxl-12 text-center my-3"> 
            <button type="button" class="btn btn-outline-info">Check More</button>
            </div>


        </div> 
     </div>
        </>
    )
}

export default OurService;