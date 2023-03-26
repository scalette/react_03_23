// @ts-nocheck
import { Component, useRef } from 'react';
import UploadForm from '../upload/upload-form.component';
import { FormsStyled } from './forms.style';
import React from 'react';
import SelectForm from '../select-form/upload-form.component';
import DatePicker from '../date-input/date-input.component';
import CheckBox from '../check-box/check-box.component';
import RadioButtons from '../radio-buttons/radio-buttons.component';
import { Monster } from '../../routes/types';

function Forms() {
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const checkBoxesRef = useRef(null);
  const dateRef = useRef(null);
  const selectRef = useRef(null);
  const uploadRef = useRef(null);
  const errors: string[] = [];

  const nameValidation = (name: string, errors: string[]) => {
    if (name.length === 0) {
      errors.push('Name is mandatory field!');
    }
  };
  const dateValidation = (date: string, errors: string[]) => {
    if (!date) {
      errors.push('Date is mandatory field!');
    }
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const name = nameRef.current.value as string;
    const gender = genderRef.current.female.current.checked ? 'female' : 'male';
    const permitions = {
      read: checkBoxesRef.current.read.current.inputValue.current.checked,
      write: checkBoxesRef.current.write.current.inputValue.current.checked,
      execute: checkBoxesRef.current.execute.current.inputValue.current.checked,
    };
    const date = dateRef.current.inputValue.current.value;
    const fruit = selectRef.current.inputValue.current.value;
    const upload = uploadRef.current.inputValue.current.value.split('fakepath\\')[1];
    nameValidation(name, errors);
    dateValidation(date, errors);
    if (errors.length != 0) {
      event.preventDefault();
      console.log(errors);
      alert(`Please fill out the fields: \n${errors.join('\n')}`);
      document.location.href = '\\forms';
      return;
    }
    alert('Monster was added');
    const monsters = localStorage.getItem('monsters');
    const monstersParsed = JSON.parse(monsters ?? '[]');
    const nextId = String(monstersParsed.length);
    const newMonster: Monster = {
      id: nextId,
      name,
      gender,
      permitions,
      date,
      fruit,
      file: upload,
    };
    monstersParsed.push(newMonster);
    localStorage.setItem('monsters', JSON.stringify(monstersParsed));

    document.location.href = '\\';
    event.preventDefault();
  };
  console.log(errors);
  return (
    <FormsStyled onSubmit={onSubmit}>
      <input placeholder="Your name" ref={nameRef} />
      {errors.length === 0 ? null : <p>Name is mandatory field!</p>}
      <RadioButtons ref={genderRef} />
      <CheckBox ref={checkBoxesRef} />
      <DatePicker ref={dateRef} />
      <SelectForm ref={selectRef} />
      <UploadForm ref={uploadRef} />

      <input type="submit" />
    </FormsStyled>
  );
}

export default Forms;
