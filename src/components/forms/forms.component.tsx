import { useForm, SubmitHandler } from 'react-hook-form';
import UploadForm from '../upload/upload-form.component';
import { FormsStyled } from './forms.style';
import SelectForm from '../select-form/upload-form.component';
import DatePicker from '../date-input/date-input.component';
import CheckBoxes from '../check-box/checkBoxes.component';
import { RadioButtons } from '../radio-buttons/radio-buttons.component';
import { Inputs } from './forms.type';
import { Monster } from '../../routes/types';

function Forms() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      permitions: [null, null, null],
      gender: 'Male',
      fruit: 'orange',
    },
  });
  watch('permitions');
  const onSubmit: SubmitHandler<Inputs> = ({
    name,
    gender,
    permitions,
    date,
    fruit,
    file,
    error,
  }) => {
    console.log(error);
    return;
    alert('Monster was added');
    const monsters = localStorage.getItem('monsters');
    const monstersParsed = JSON.parse(monsters ?? '[]');
    const nextId = String(monstersParsed.length);
    const newMonster: Monster = {
      id: nextId,
      name,
      gender,
      permitions: {
        write: permitions.includes('write'),
        read: permitions.includes('read'),
        execute: permitions.includes('execute'),
      },
      date,
      fruit,
      file: file[0].name,
    };
    monstersParsed.push(newMonster);
    localStorage.setItem('monsters', JSON.stringify(monstersParsed));

    document.location.href = '\\';
  };
  console.log(errors);
  return (
    <FormsStyled onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Your name"
        {...register('name', {
          required: 'Name is required',
          maxLength: {
            value: 10,
            message: 'max length is 10',
          },
          minLength: {
            value: 10,
            message: 'min length is 6',
          },
        })}
      />
      {errors.name && <p className="alert">{errors.name.message}</p>}
      <RadioButtons register={register} />
      <CheckBoxes options={['read', 'write', 'execute']} control={control} name="permitions" />
      <DatePicker register={register} />
      {errors.date && <p className="alert">{errors.date.message}</p>}
      <SelectForm register={register} />
      <UploadForm register={register} />
      <input type="submit" />
    </FormsStyled>
  );
}

export default Forms;
