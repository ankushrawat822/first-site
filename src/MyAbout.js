import React from 'react';
// import {Button} from 'react-bootstrap';
import Tooltips from './Tooltips';
const MyAbout = () => {
    return (
        <>
            <div className="About ">
                <h1 className="text-center headingAbout">About me</h1>
                <hr className=" w-25 mx-auto " />
                <div className="container">
                    <div className="row  my-5">
                        <div className=" col-lg-6 col-md-6 col-12 col-xxl-6">
                            <figure>
                            <img src="https://source.unsplash.com/user/erondu/daily" alt="myaboutImage"  fluid  className="aboutImg" />

                            </figure>
                        </div>

                        <div className=" col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column ">
                            <h1>My Journy</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a tenetur cum, commodi odit pariatur unde iste porro nobis rem sequi? Animi tempore esse, molestiae optio officiis maxime atque eveniet numquam, sit magnam dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ut cumque animi sapiente voluptatum, expedita quisquam eaque obcaecati, itaque unde qui id voluptate. </p>
                            <Tooltips></Tooltips>
                        
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default MyAbout;