import React from 'react';
import { set, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import "./Contact.css";

const Contact = () => {


const telRegex = /^((\+92)|(03))\d{9}$/; // Standard PK Number Pattern

 const contactSchema = yup.object().shape({
  // Name Fields
  FirstName: yup
    .string()
    .trim()
    .required("First Name is required")
    .max(30, "First Name cannot exceed 30 characters"),

  LastName: yup
    .string()
    .trim()
    .required("Last Name is required")
    .max(30, "Last Name cannot exceed 30 characters"),

  // Contact Fields
  Number: yup
    .string() // string use karna best practice hai
    .required("Phone number is required")
    .test(
      "NumRegex",
      "Only valid Pakistani numbers allowed (e.g. 03001234567 or +923001234567)",
      (value) => !value || telRegex.test(value)
    ),

  Email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email address"),

  // Address Details
  Address: yup
    .string()
    .trim()
    .required("Enter your current address")
    .max(40, "Address must be under 40 characters"),

  City: yup
    .string()
    .trim()
    .required("Type your city name")
    .max(10, "City name must be under 10 characters"),

  // Message / Subject
  Subject: yup
    .string()
    .trim()
    .nullable()
    .required("Subject is required")
    .max(400, "Subject must be under 400 characters"),

  Message: yup
    .string()
    .trim()
    .required("Message is required"),

  // Optional / Extra Fields
  Vichle: yup
    .string()
    .optional(),

  HavalLover: yup
    .boolean()
    .default(false),
})

  const {
    handleSubmit,
    register,
    formState: { errors , isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    console.log("Form Submitted Data:", data);

    // Set data in Data base

    // try {
      
    // } catch (error) {
      
    // }
  };

  return (
    <div className="gwm-contact-container">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
        <div className="divider"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        {/* Row 1: Personal Info */}
        <div className="form-row">
          <div className="row-label">
            <h3>Personal Information</h3>
          </div>

          <div className="row-inputs">
            <div className="input-group-2">
           
              <div className="field-container">
                <input type="text" {...register('FirstName')} placeholder="First Name*" />
                {errors.FirstName && <span className="error-msg">{errors.FirstName.message}</span>}
              </div>
           
              <div className="field-container">
                <input type="text" {...register('LastName')} placeholder="Last Name*" />
                {errors.LastName && <span className="error-msg">{errors.LastName.message}</span>}
              </div>
            </div>

            <div className="input-group-2">
              <div className="field-container">
                <input type="tel" className='tel-input' {...register('Number')} placeholder="Phone Number*" />
                {errors.Number && <span className="error-msg">{errors.Number.message}</span>}
              </div>
              <div className="field-container">
                <input type="email" {...register('Email')} placeholder="Email Address*" />
                {errors.Email && <span className="error-msg">{errors.Email.message}</span>}
              </div>
            </div>

            <div className="input-group-2">
              <div className="field-container">
                <input type="text" {...register('Address')} placeholder="Address" />
                {errors.Address && <span className="error-msg">{errors.Address.message}</span>}
              </div>
              <div className="field-container">
                <input type="text" {...register('City')} placeholder="City" />
                {errors.City && <span className="error-msg">{errors.City.message}</span>}
              </div>
            </div>

            <div className="field-container">
              <input type="text" {...register('Subject')} placeholder="Subject*" />
              {errors.Subject && <span className="error-msg">{errors.Subject.message}</span>}
            </div>

            <div className="field-container">
              <textarea {...register('Message')} placeholder="Your Message*" rows="4"></textarea>
              {errors.Message && <span className="error-msg">{errors.Message.message}</span>}
            </div>
          </div>
        </div>

        {/* Row 2: Select Vehicle */}
        <div className="form-row">
          <div className="row-label">
            <h3>Select a Vehicle</h3>
          </div>
          <div className="row-inputs">
            <div className="field-container">
              <select {...register('Vichle')} >
                <option value="Other Inquiry">Other Inquiry</option>
                <option value="Haval H6">Haval H6</option>
                <option value="Ora 03">Ora 03</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 3: Checkbox & Submit */}
        <div className="form-row">
          <div className="textAlign">
            <input {...register('HavalLover')} className="mr-4 no-height" type="checkbox" />
            <span>I will like Haval representative contact me for promotional stuff</span>
          </div>
          <div className="row-inputs">
            <div className="btn-wrapper flex justify-center">
              <button type="submit" className="submit-btn">
                Send Message &gt;
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;