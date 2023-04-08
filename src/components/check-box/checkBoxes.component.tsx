import { useState } from 'react';
import { useController } from 'react-hook-form';
import { CheckBoxesProps } from '../../routes/types';
import { CheckBox } from './checkBoxes.style';

const CheckBoxes = ({ options, control, name }: CheckBoxesProps) => {
  const { field } = useController({
    //@ts-ignore
    control,
    //@ts-ignore
    name,
  });
  console.log('Field', field);
  console.log('Field2', control, name);
  //@ts-ignore
  const [value, setValue] = useState<(string | null)[]>(field.value || [null, null, null]);

  return (
    <CheckBox>
      {options.map((option: string, index: number) => (
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
      ))}
    </CheckBox>
  );
};

export default CheckBoxes;
