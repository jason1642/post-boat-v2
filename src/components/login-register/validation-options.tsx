import * as React from 'react';
// import { useState, useEffect } from 'react';
import { ErrorMessage } from "../../styles/forms/forms.js";
export const registerOptions = {
  username: {
    required: "Username is required",
    minLength: {
      value: 3,
      message:"Username must be atleast 3 characters long"
    }
  },
  email: { required: "Email is required" },
  bio: {
    maxLength: {
      value: 300,
      message: "Your bio is too long"
  }},
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters"
    },
    maxLength: { 
      value: 24,
      message: "Password cannot exceed 24 characters"
    }
  }
};

interface IErrorMessageProps {
  message: string
}
export const loginOptions = {
  username: { required: "Username is required" },
  password: {required: "Password is required"}
}

export const ErrorComponent: React.FunctionComponent<IErrorMessageProps> = ({message}) => {

  return (
    <ErrorMessage>
      {message}
    </ErrorMessage>
  )
}