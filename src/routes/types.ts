import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
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

export type PersonsSW = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  url: string;
  species: string[];
  vehicles: string[];
  starships: string[];
};

export type InputProps = {
  register: UseFormRegister<Inputs>;
  errors?: FieldErrors<FieldValues>;
};

export type CheckBoxesProps = {
  control: Control<Inputs, never>;
  name: string;
  options: string[];
};
