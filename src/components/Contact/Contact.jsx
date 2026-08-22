import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import "./Contact.css";

const Contact = () => {
  const contactSchema = yup.object({
    FirstName: yup.string().required("First Name is required").max(30, "Max 30 characters"),
    LastName: yup.string().required("Last Name is required").max(30, "Max 30 characters"),
    Number: yup.number().typeError("Must be a valid number").required("Phone number is required"),
    Email: yup.string().typeError('this coustom error').email("Invalid email format").required("Email is required"),
    Address: yup.string().max(40, "Max 40 characters"),
    City: yup.string().max(10, "Max 10 characters"),
    Subject: yup.string().required("Subject is required").max(400, "Max 400 characters"),
    Message: yup.string().required("Message is required"),
    Vichle: yup.string(),
    HavalLover: yup.boolean()
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema)
  });

  const seeData = (data) => {
    console.log("Form Submitted Data:", data);
  };

  return (
    <div className="gwm-contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
        <div className="divider"></div>
      </div>

      <form onSubmit={handleSubmit(seeData)} className="contact-form">
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
                <input type="tel" {...register('Number')} placeholder="Phone Number*" />
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
              <select {...register('Vichle')} defaultValue="Other Inquiry">
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
            <input {...register('HavalLover')} className="mr-4" type="checkbox" />
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