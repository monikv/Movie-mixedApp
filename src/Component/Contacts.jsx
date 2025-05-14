import React from "react";
import CardContent from '@mui/material/CardContent'
import Nav from './Nav';

import { Button, Card, TextField } from "@mui/material";

const Contacts = () => {
const [value, setValue] = React.useState({
  name: "",
  email: "",    
  message: "",
});

const handleChange = (event) => {
  const { name, value } = event.target;
  
setValue((prev) => ({
  ...prev,
  [event.target.name]: event.target.value,
}))
}

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("value:", value.name, value.email, value.message);
  };

  return (
    <>
      <Nav />
      <div style={{height:"100vh" ,    background:"beige"}}>
        <Card variant="outlined" sx={{width:"50%",margin: "auto", marginTop: "20%" }}>

          <CardContent>

            <h1>Contact Us</h1>
            <form onSubmit={onSubmit}>
              <div sx={{ display: 'flex', gap: "10px", marginBottom: "30px" }}>
                <TextField onChange={handleChange} type="text" id="name" name="name"  label="Name"  variant="standard" value={value.name} />

              </div>

              <div>
                <TextField onChange={handleChange} type="email" id="email" name="email"  label="Email" variant="standard" value={value.email} />

              </div>

              <div>
                <TextField  onChange={handleChange}type="message"  id="message" name="message" label="message" variant="standard" value={value.message} />

              </div>
              <Button sx={{margin: "50px"}} variant="outlined" type="submit" >Submit</Button>
            </form>

          </CardContent>

        </Card>

      </div>
    </>
  );
};

export default Contacts;