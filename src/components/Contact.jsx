import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "75181546-b080-4700-9e64-1725a4092260");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact">
      <div className="contact-box">
        <div className="heads">
          <div className="getintouch">
            <h1 className="writeamsg">Write a Message</h1>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              className="fname"
              type="text"
              placeholder="Full Name"
              name="name"
              required
            />
            <input
              className="email"
              type="email"
              placeholder="Email address"
              name="email"
              required
            />
          </div>
          <div>
            <input
              className="msgbox"
              type="message"
              placeholder="Write a message"
            />
          </div>
          <div className="btn">
            <button type="submit" className="getintouchbtn">
              SEND A MESSAGE
            </button>
          </div>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
