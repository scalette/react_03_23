import { UseFormRegister } from 'react-hook-form';
import { Inputs } from '../components/forms/forms.type';
import { Control } from 'react-hook-form';

export type Monster = {
  id: string;
  name: string;
  date: string;
  gender: string;
  permitions: {
    read: boolean;
    write: boolean;
    execute: boolean;
  };
  fruit: string;
  file: string;
};

export type InputProps = {
  register: UseFormRegister<Inputs>;
};

export type CheckBoxesProps = {
  control: Control<Inputs, never>;
  name: string;
  options: string[];
};
