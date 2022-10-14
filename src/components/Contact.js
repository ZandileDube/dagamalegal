import React, { useRef } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './Contact.css'
import { GrLocation } from 'react-icons/gr';
// import logo from './images/map.jpg';
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='ContactUs' id='ContactUs'>
    <Container>
      <Row>
        <Col className='section'>
          <h1>Book Us</h1>
          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </Col>
        <Col style={{ backgroundColor: '#13ab9c' }}>
          <div className='SectionOne' >
            <p style={{
              color: '#13ab9cff'
            }}>he</p>
            <GrLocation size={50} /> <h3>Head Quaters</h3>
            <p>576 Fisant Street, <br />Kameeldrift, <br />
              Pretoria,<br /> 0022</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  h1 {
    text

  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(19,171,156);
      color: white;
      border: none;
    }
  }
`;