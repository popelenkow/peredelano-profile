import { UseFormRegister } from 'react-hook-form';

export enum InputsRegisterKey {
  ROLE = 'teamRole',
  EXPERIENCE = 'commercialExperience',
}

export type FormValues = {
  teamRole: string;
  commercialExperience: string;
  stackUsed: string;
};

export type FormInputsProps = {
  register: UseFormRegister<FormValues>;
  title: string;
  value: string;
  registerKey: `${InputsRegisterKey.ROLE}` | `${InputsRegisterKey.EXPERIENCE}`;
  data: string[];
  setValue: (el: string) => void;
};
