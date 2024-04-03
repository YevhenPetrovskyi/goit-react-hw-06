import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^[a-zA-Zа-яА-ЯіїґІЇҐ].*$/, 'Name must start with letters'),
  number: Yup.string()
    .min(7)
    .max(18)
    .required('Required')
    .matches(
      /^\+?(\d{2}-?\d{3}-?\d{3}-?\d{2}-?\d{2})$|^\d{7}$|^\d{10}$|^\+?\d{12}$/,
      'Number must have 7 numbers or 7 numbers and codes'
    ),
});
