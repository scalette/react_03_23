// @ts-nocheck
import { Component, useRef, useState } from 'react';
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import UploadForm from '../upload/upload-form.component';
import { FormsStyled } from './forms.style';
import React from 'react';
import SelectForm from '../select-form/upload-form.component';
import DatePicker from '../date-input/date-input.component';
import CheckBoxes from '../check-box/checkBoxes.component';
import { RadioButtons } from '../radio-buttons/radio-buttons.component';
import { Monster } from '../../routes/types';
import { Inputs } from './forms.type';

function Forms() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      permitions: [],
    },
  });
  watch('permitions');
  console.log(control);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('EVENT:', event);
    // nameValidation(name, errorsOld);
    // dateValidation(date, errorsOld);
    // if (errorsOld.length != 0) {
    //   event.preventDefault();
    //   console.log(errorsOld);
    //   alert(`Please fill out the fields: \n${errorsOld.join('\n')}`);
    //   document.location.href = '\\forms';
    //   return;
    // }
    // alert('Monster was added');
    // const monsters = localStorage.getItem('monsters');
    // const monstersParsed = JSON.parse(monsters ?? '[]');
    // const nextId = String(monstersParsed.length);
    // const newMonster: Monster = {
    //   id: nextId,
    //   name,
    //   gender,
    //   permitions,
    //   date,
    //   fruit,
    //   file: file.split('fakepath\\')[1],
    // };
    // monstersParsed.push(newMonster);
    // localStorage.setItem('monsters', JSON.stringify(monstersParsed));

    // document.location.href = '\\';
    event.preventDefault();
  };
  console.log(errors);

  return (
    <FormsStyled onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Your name" {...register('name')} />
      <RadioButtons register={register} />
      <CheckBoxes options={['read', 'write', 'execute']} control={control} name="permitions" />
      <DatePicker register={register} />
      <SelectForm register={register} />
      <UploadForm register={register} />
      <input type="submit" />
    </FormsStyled>
  );
}

export default Forms;
