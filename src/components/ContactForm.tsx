import React, { useState, type FormEvent } from "react";
import { sendContact } from "../services/api";

import "./ContactForm.css";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!firstName.trim()) errs.firstName = "First name required";
    if (!lastName.trim()) errs.lastName = "Last name required";
    if (!email.trim()) {
      errs.email = "Email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Invalid email address";
    }
    if (!message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit triggered");
    setStatus("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;


    try {
      const payload = { name: `${firstName} ${lastName}`.trim(), email: email, message: message };
      const res =  await sendContact(payload);
      
        if (res.ok) {
        setStatus("Message sent!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else if (res.errors) {
        setStatus("Please fix the errors and try again.");
        const apiErrs: FormErrors = {};
        res.errors.forEach((err: { param?: string; msg: string }) => {
          if (err.param && err.param in apiErrs)
            apiErrs[err.param as keyof FormErrors] = err.msg;
        });
        setErrors(apiErrs);
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setStatus("Server error. Please try again later." + err);
    }
  };

  return (
    <>
      <h4
        style={{ textAlign: "center", paddingTop: "6px", fontSize: "1.1rem" }}
      >
        Contact Us!
      </h4>
      <form
        className="contact-form-small my-auto p-1"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <div className="text-danger small">{errors.firstName}</div>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <div className="text-danger small">{errors.lastName}</div>
            )}
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              aria-label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="text-danger small">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <textarea
              className="form-control"
              placeholder="Type your message here"
              id="Message entry"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <div className="text-danger small">{errors.message}</div>
            )}
          </div>
        </div>
        <div className="row my-3">
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </div>
        {status && <div className="my-2 text-info" style={{color:"red"}}>{status}</div>}
      </form>
    </>
  );
};

export default ContactForm;
