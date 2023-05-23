import { object, string, number, date, InferType, ref } from 'yup';

let Validations = object({
  email: string().email("Geçerli bir email girin!").required("Zorunlu Alan"),
  password: string().required("Zorunlu Alan").min(6,"Parola minumum 6 karakter olmalı!").max(16,"Parola maksimum 16 karakter olmalı!"),
  confirmPassword: string().oneOf([ref('password'), null], 'Şifreler eşleşmeli!')
});

export default Validations;   

