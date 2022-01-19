import React, { useState } from "react";
import "./styles/contact.css";
const Contact = () => {
  const [namefocus, setNamefocus] = useState(false);
  const [emailfocus, setEmailfocus] = useState(false);
  const [messagefocus, setMessagefocus] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
		const formSubmit = (e)=>{
				e.preventDefault()
				setFormdata({
						name:"",
						email:"",
						message:""
				})
		}
  return (
    <div className="contact-container">
      <div className="contactme">
        <p className="contactme-header">CONTACT ME</p>
      </div>
      <div className="contactinput-container">
        <div className="contactinput">
          <div className="input-group">
            <label
              htmlFor="name"
              style={namefocus ? { color: "#d0a854" } : { color: "#101112" }}
            >
              NAME
            </label>
            <input
              type="text"
              name="name"
					value={formdata.name}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
						'name': e.target.value,
                });
              }}
              onFocus={() => setNamefocus(true)}
              onBlur={() => setNamefocus(false)}
            />
          </div>
          <div className="input-group">
            <label
              htmlFor="email"
              style={emailfocus ? { color: "#d0a854" } : { color: "#101112" }}
            >
              EMAIL
            </label>
            <input
              type="text"
              name="email"
					value={formdata.email}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
						'email': e.target.value,
                });
              }}
              onFocus={() => setEmailfocus(true)}
              onBlur={() => setEmailfocus(false)}
            />
          </div>
          <div className="input-group">
            <label
              htmlFor="message"
              style={messagefocus ? { color: "#d0a854" } : { color: "#101112" }}
            >
              MESSAGE
            </label>
            <textarea
              id="message-area"
              name="message"
              cols="30"
              rows="10"
              onChange={(e) => {
                setFormdata({
                  ...formdata,
						'message': e.target.value,
                });
              }}
				value={formdata.message}
              onFocus={() => setMessagefocus(true)}
              onBlur={() => setMessagefocus(false)}
            ></textarea>
          </div>
				<input className="submit-button" onClick={(e)=>formSubmit(e)} type="button" value="SEND" />
        </div>
			  <h1>{formdata.name}</h1>
			  <h1>{formdata.message}</h1>
			  <h1>{formdata.email}</h1>
      </div>
    </div>
  );
};

export default Contact;
