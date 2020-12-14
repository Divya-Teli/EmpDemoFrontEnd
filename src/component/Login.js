import React, { Component, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import ReactFormValidation from "react-form-input-validation";
import '../styles/login.css'

ReactFormValidation.register(
  "custompassword",
  function (value, requirement, attribute) {
    return value.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    );
  },
  "The password must contain atleast 1 speacial character and digit and alphabet."
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        password: "",
      },
      errors: {},
    };
    this.form = new ReactFormValidation(this);
    this.form.useRules({
      email: "required|email",
      password: "required|custompassword",
    });

    this.form.onformsubmit = (fields) => {
      if (
        this.state.fields.email === "d@gmail.com" &&
        this.state.fields.password === "divya@123"
      ) {
     

        alert("login done successfully");

  
        localStorage.setItem("email", this.state.fields.email);
        setTimeout(() => {
          this.props.history.push({
            pathname: "/home",
            state: { data: this.fields },
          });
        }, 1000);
      } else {
        alert("credentials are wrong !!please try again :) :)");
      }
    };
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
               
              <MDBCardBody>
                <form
                  className="form"
                  noValidate
                  onSubmit={this.form.handleSubmit}
                >
                      <p className="h4 text-center py-4">Sign in</p>
                      <MDBInput
                    label="Your name"
                    icon="user"
                    name="email"
                    onChange={this.form.handleChangeEvent}
                    onBlur={this.form.handleBlurEvent}
                    value={this.state.fields.email}
                    type="text"
                  />
                    <label className="error">
                      {this.state.errors.email ? this.state.errors.email : ""}
                    </label>
                    <MDBInput
                    label="Your password"
                    icon="lock"
                    name="password"
                    onChange={this.form.handleChangeEvent}
                    onBlur={this.form.handleBlurEvent}
                    value={this.state.fields.password}
                    type="password"
                  />
              
                   
                    <label className="error">
                      {this.state.errors.password
                        ? this.state.errors.password
                        : ""}
                    </label>
               

                  <button className="btn btn-block" style={{backgroundColor:'#3f51b5',color:'white'}}>Login</button>
                </form>
                </MDBCardBody>
                </MDBCard>

            
            </MDBCol>
            </MDBRow>
       
   
      </MDBContainer>
    );
  }
}

export default Login;
