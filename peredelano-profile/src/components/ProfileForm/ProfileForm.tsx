import { useState } from 'react';
import { useForm,SubmitHandler } from 'react-hook-form';

import { Button,TextField } from '@mui/material';
import SendSharpIcon from '@mui/icons-material/SendSharp';

import { ProfileFormControl } from './ProfileFormControl';

import { FormValues,InputsRegisterKey } from '../../types';
import { experienceArray,teamRoleArray } from '../../constants';

import styles from './styles.module.css';

enum InputsTitle {
  ROLE = 'Team Role',
  EXPERIENCE = 'Commercial experience',
  STACK = 'Stack',
  STACK_PLACEHOLDER = 'Prompt: React, ...',
  STACK_ERROR = 'At least two symbols',
  SUBMIT = 'submit',
}

enum StackMinLen {
  LENGTH = 2,
}

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
  });
  const [experience,setExperience] = useState<string>('');
  const [role,setRole] = useState<string>('');
  const [stack,setStack] = useState<string>('');

  const onSubmit: SubmitHandler<FormValues> = (data): void => {
    const personData: FormValues = {
      teamRole: data.teamRole,
      experience: data.experience,
      stack: data.stack.replace(/\s+/g,' ').trim(),
    };

    console.log('SUBMIT:',personData);
    setRole('');
    setExperience('');
    setStack('');
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <ProfileFormControl
        title={InputsTitle.ROLE}
        registerKey={InputsRegisterKey.ROLE}
        register={register}
        value={role}
        setValue={setRole}
        data={teamRoleArray}
      />
      <ProfileFormControl
        title={InputsTitle.EXPERIENCE}
        registerKey={InputsRegisterKey.EXPERIENCE}
        register={register}
        value={experience}
        setValue={setExperience}
        data={experienceArray}
      />
      <TextField
        error={errors?.stack ? true : false}
        className={styles.input_text}
        id="outlined-basic"
        label={InputsTitle.STACK}
        placeholder={InputsTitle.STACK_PLACEHOLDER}
        value={stack}
        autoComplete="off"
        variant="outlined"
        multiline
        maxRows={3}
        {...register('stack',{
          required: true,
          onChange: (e) => {
            setStack(`${e.target.value}`);
          },
          minLength: {
            value: StackMinLen.LENGTH,
            message: InputsTitle.STACK_ERROR,
          },
        })}
      />
      {errors?.stack && (
        <span className={styles.error}>{InputsTitle.STACK_ERROR}</span>
      )}

      <Button
        className={styles.btn}
        type="submit"
        variant={'contained'}
        disabled={
          stack.length >= StackMinLen.LENGTH && experience.length && role.length
            ? false
            : true
        }
        endIcon={<SendSharpIcon />}
      >
        {InputsTitle.SUBMIT}
      </Button>
    </form>
  );
};

export default ProfileForm;
