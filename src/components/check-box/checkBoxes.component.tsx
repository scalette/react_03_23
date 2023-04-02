import React, { RefObject } from 'react';
import { useController, useForm } from 'react-hook-form';
import { CheckBoxesProps } from '../../routes/types';
import { CheckBox } from './checkBoxes.style';

const CheckBoxes = ({ options, control, name }: CheckBoxesProps) => {
  const { field } = useController({
    control,
    name,
  });
  const [value, setValue] = React.useState(field.value || []);

  return (
    <CheckBox>
      {options.map((option: string, index: number) => (
        <>
          <div key={index}>
            <input
              onChange={(e) => {
                const valueCopy = [...value];

                valueCopy[index] = e.target.checked ? e.target.value : null;

                field.onChange(valueCopy);

                setValue(valueCopy);
              }}
              key={option}
              checked={value.includes(option)}
              type="checkbox"
              value={option}
            />
            {option}
          </div>
        </>
      ))}
    </CheckBox>
  );
};

export default CheckBoxes;
