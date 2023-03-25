import { Component, useRef } from 'react';
import UploadForm from '../upload/upload-form.component';
import { FormsStyled } from './forms.style';
import React from 'react';
import SelectForm from '../select-form/upload-form.component';
import DatePicker from '../date-input/date-input.component';
import CheckBox from '../check-box/check-box.component';
import RadioButtons from '../radio-buttons/radio-buttons.component';

function Forms() {
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const referralRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = (event) => {
    console.log(passwordRef)
    console.log(referralRef)
    console.log(lastNameRef)
    console.log(firstNameRef)
    console.log(phoneNumberRef)
    alert(
      `Current values of the form ${emailRef.current.value}, ${phoneNumberRef.current.value}, ${firstNameRef.current.value}, ${lastNameRef.current.value}, ${referralRef}, ${passwordRef.current.value}`
    );
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      {/* register our input field with register function provided by the useForm hook */}
      <input placeholder="Enter email" ref={emailRef} />
      <RadioButtons ref={phoneNumberRef} />
      <CheckBox ref={firstNameRef} />
      <DatePicker ref={lastNameRef} />
      <SelectForm ref={referralRef} />
      <UploadForm ref={passwordRef} />

      <input type="submit" />
    </form>
  );
}

export default Forms;
