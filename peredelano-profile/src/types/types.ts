import { UseFormRegister } from 'react-hook-form';

export enum InputsRegisterKey {
  ROLE = 'teamRole',
  EXPERIENCE = 'experience',
}

export type FormValues = {
  teamRole: string;
  experience: string;
  stack: string;
};

export type FormInputsProps = {
  register: UseFormRegister<FormValues>;
  title: string;
  value: string;
  registerKey: `${InputsRegisterKey.ROLE}` | `${InputsRegisterKey.EXPERIENCE}`;
  data: string[];
  setValue: (el: string) => void;
};
