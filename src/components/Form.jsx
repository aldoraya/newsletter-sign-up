import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FormErrors } from "./FormErrors";
import emailjs from 'emailjs-com';

const Form = () => {
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "" });
  const [emailValid, setEmailValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const formEmail = useRef(null);

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmail(value);
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = { ...formErrors };
    let isValid = false;

    switch (fieldName) {
      case "email":
        isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = isValid ? "is valid" : " is invalid";
        break;
      default:
        break;
    }

    setFormErrors(fieldValidationErrors);
    setEmailValid(isValid);
    validateForm();
  };

  const validateForm = () => {
    setFormValid(emailValid);
  };

  const handleNavigation = (e) => {
    e.preventDefault(); // Prevent form submission

    emailjs
      .sendForm(
        "service_81ndtkm",
        "template_gx7bbtb",
        formEmail.current,
        "oKcWcuvwaDlPyOPcP"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          navigate(`/success?email=${encodeURIComponent(email)}`);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const errorClass = (error) => {
    return error.length === 0 ? "" : "has-error";
  };

  const style = (emailValid) => {
    if (emailValid) {
      return {
        width: "100%",
        backgroundColor: "#e6ffeb",
        color: "#42ba96",
        borderColor: "#42ba96",
      };
    } else if (emailValid == "") {
      return {
        width: "100%",
        backgroundColor: "white",
        color: "black",
        borderColor: "#9294a0",
      };
    } else {
      return {
        width: "100%",
        backgroundColor: "#fff3f5",
        color: "red",
        borderColor: "#d32f2f",
      };
    }
  };

  return (
    <form ref={formEmail} onSubmit={handleNavigation}>
      <div className={`form-group ${errorClass(formErrors.email)}`}>
        <div className="block pt-5 sm:pt-10 pr-4 text-base">
          <div className="flex">
            <label className="text-sm sm:text-base" htmlFor="email">Email address</label>
            {!emailValid ? (
              <div className="text-sm sm:text-base panel panel-default flex flex-1 justify-end text-error ">
                <FormErrors formErrors={formErrors} />
              </div>
            ) : (
              <div className="text-sm sm:text-base panel panel-default flex flex-1 justify-end text-success ">
                <FormErrors formErrors={formErrors} />
              </div>
            )}
          </div>
          <input
            type="email"
            required="Please Enter Your Email!"
            className="text-sm sm:text-base form-control border border-grey rounded-md w-full py-3 sm:py-4 px-4 outline-none mt-1"
            name="email"
            placeholder="Email@company.com"
            style={style(emailValid)}
            value={email}
            onChange={handleUserInput}
          />
        </div>
      </div>
      <div className="block pt-6 text-base pr-4">
        <button
          type="submit"
          value="send"
          disabled={!formValid}
          className="text-sm sm:text-base text-white bg-dark-slate-grey rounded-md w-full py-3 sm:py-4 font-bold hover:bg-gradient-to-r hover:to-orange hover:from-primary ease-out duration-500 hover:duration-500 active:text-black"
        >
          Subscribe to Monthly newsletter
        </button>
      </div>
    </form>
  );
};

export default Form;
