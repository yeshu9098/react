import React from "react";
import Button from "./Button";
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  
  const handleChange = (e) =>{
    // console.log(e.target.value)
    setName(e.target.value);
  }



  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <p>
        <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
        </p>
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
        <form action="" method="post">
          
          <input type="text" name="" value={name} id="1" onChange={handleChange} placeholder="Name" />
          <input type="number" name="" id="" placeholder="How many people" />
          <input type="datetime-local" name="" id="" value="2020-11-16T20:00"/>
          <input type="text" name="" id="" placeholder="Message / Special Requirements" />
          <Button/>
        </form>
      </div>
    </>
  );
};

export default Contact;
