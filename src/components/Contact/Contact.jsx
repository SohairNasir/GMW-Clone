import { useForm } from "react-hook-form"
import"./Contact.css"
import React from 'react'


const Contact = () => {

    const {
        handleSubmit,
        register,
        formState:{errors},
    } = useForm()

    const seeData = (data)=>{
        console.log(data)
    } 

        console.log("errors => ", errors)


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
          <input type="text" {...register('FirstName')} placeholder="First Name*" />
          <input type="text" {...register('LastName')} placeholder="Last Name*"  />
        </div>
        <div className="input-group-2">
          <input type="tel" {...register('Number')} placeholder="Phone Number*" />
          <input type="email" {...register('Email')} placeholder="Email Address*" />
        </div>
        <div className="input-group-2">
          <input type="text" {...register('Address')} placeholder="Address" />
          <input type="text" {...register('City')}  placeholder="City" />
        </div>
        <input type="text" {...register('Subject')} placeholder="Subject*"/>
        <textarea placeholder="Your Message*" rows="4" ></textarea>
      </div>
    </div>

    {/* Row 2: Select Vehicle */}
    <div className="form-row">
      <div className="row-label">
        <h3 >Select a Vehicle</h3>
      </div>
      <div className="row-inputs">
        <select defaultValue="Other Inquiry">
          <option value="Other Inquiry">Other Inquiry</option>
          <option value="Haval H6">Haval H6</option>
          <option value="Ora 03">Ora 03</option>
        </select>
      </div>
    </div>

    {/* Row 3: Checkbox & Submit */}
    <div className="form-row">
      <div className=" textAlign  ">
          <input className="mr-4" type="checkbox" />
          <span>I will like Haval representative contact me for promotional stuff</span>
          </div>
    <div className="row-inputs">
        <div className="btn-wrapper flex justify-center  ">
          <button type="submit" className="submit-btn">
            Send Message &gt;
          </button>
        </div>
      </div>
      </div>
    {/* </div> */}
  </form>
</div>
  )
}

export default Contact