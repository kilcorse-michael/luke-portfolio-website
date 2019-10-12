import React, {  Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
import * as emailjs from 'emailjs-com';



class Contact extends Component{


  constructor(props, context) {

    super(props, context);
    this.state = {
      user_name: '',
      user_email: '',
      user_phone: '',
      user_company: '',
      contact: ''
    }
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
      }
  }

  verifyCallback(recaptchaToken) {
  console.log(recaptchaToken, "<= your recaptcha token")
}

handleChange(event){
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

handleSubmit(event){
    event.preventDefault();
    emailjs.sendForm('gmail', 'contact_form', '#contact-form-id', 'user_0Ez87mdeNLOP3BULFQnHh');
    this.setState({
      user_name: '',
      user_email: '',
      user_phone: '',
      user_company: '',
      contact: ''
    });
    alert("You have succesfully submitted your contact form! We will be back to you as soon as possible!");
}
render(){
  return(
    <div className="contact-title">
    <h1>CONTACT</h1>
      <div className="contact_div">
        <form id="contact-form-id" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" ref="name" name="user_name" onChange = {this.handleChange} value={this.state.user_name}/>
          <label>Email</label>
          <input type="email" ref="email" name="user_email" onChange = {this.handleChange} value={this.state.user_email}/>
          <label>Phone Number</label>
          <input type="text" ref="phone" name="user_phone" onChange = {this.handleChange} value={this.state.user_phone}/>
          <label>Company/Venue</label>
          <input type="text" ref="company" name="user_company" onChange = {this.handleChange} value={this.state.user_company}/>
          <label>Message</label>
          <textarea name="contact" ref="contact" onChange = {this.handleChange} value={this.state.contact}></textarea>
          <div className= "recaptcha">
            <ReCaptcha
              ref={(el) => {this.captchaDemo = el;}}
              size="normal"
              data-theme="dark"
              render="explicit"
              sitekey="6LfviasUAAAAAHuCmFvFaHWSQWmqj_Kh0eZMk2Vf"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />
          </div>
          <input type="submit" value="Send" />

        </form>

      </div>

    </div>
  );
}
}
export default Contact;
