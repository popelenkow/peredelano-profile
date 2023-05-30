import { FormControl,InputLabel,MenuItem,Select } from '@mui/material';

import { FormInputsProps } from '../../../types';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 150,
    },
  },
};

export const ProfileFormControl = ({
  registerKey,
  register,
  value,
  setValue,
  data,
  title,
}: FormInputsProps) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={title}
          {...register(registerKey,{
            onChange: (e) => {
              setValue(e.target.value);
            },
          })}
          MenuProps={MenuProps}
        >
          {data.map((role) => (
            <MenuItem
              value={role}
              key={role}
            >
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
