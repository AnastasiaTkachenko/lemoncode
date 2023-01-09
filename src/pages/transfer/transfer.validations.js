import { Validators, createFormValidation } from '@lemoncode/fonk';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
/* import { iban } from '@lemoncode/fonk-iban-validator'; */
import {
  dayValidator,
  monthValidator,
  yearValidator,
} from './transfer.custom.validators';

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^ES\d{22}$/ },
        message: 'Invalid IBAN number, revisa si el IBAN pertenece al banco Español',
        /*  validator: iban.validator,
        message: 'Field should have a valid IBAN format', */
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[a-zA-Z]+$/ },
        message: 'Ingrese un nombre',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([1-9])*$/ },
        message: 'Ingrese un numero valido',
      },
    ],

    day: [
      {
        validator: Validators.required,
        message: 'Campo dia requerido',
      },
      {
        validator: dayValidator,
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo mes requerido',
      },
      {
        validator: monthValidator,
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo año requerido',
      },
      {
        validator: yearValidator,
      },
    ],
    date: [
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'La fecha no puede ser en pasado',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
