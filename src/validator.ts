import { FieldValidationFunctionSync } from '@lemoncode/fonk';
import { isCreditCard } from './validator.business';

const VALIDATOR_TYPE = 'IS_CREDIT_CARD';

let defaultMessage = 'The value must be a valid credit card';
export const setErrorMessage = message => (defaultMessage = message);

const validateType = (value: string) => typeof value === 'string';

const isDefined = value => value !== void 0 && value !== null && value !== '';

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const succeeded =
    !isDefined(value) || (validateType(value) && isCreditCard(value));

  return {
    succeeded,
    message: succeeded ? '' : (message as string),
    type: VALIDATOR_TYPE,
  };
};
