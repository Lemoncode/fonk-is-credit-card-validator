import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isCreditCard {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
