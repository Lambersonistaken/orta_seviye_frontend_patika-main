import { object, string, number, date, InferType, ref } from 'yup';

let Validations = object({
  email: string().email().required(),
  password: string().required().min(6).max(16),
  confirmPassword: string().oneOf([ref('password'), null], 'Passwords must match')
});

export default Validations;   

