# fonk-is-credit-card-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-is-credit-card-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-is-credit-card-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-is-credit-card-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-is-credit-card-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-is-credit-card-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-is-credit-card-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field of a form is a valid credit card

How to install it:

```bash
npm install @lemoncode/fonk-is-credit-card-validator --save
```

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  clientId: 1,
  creditCard: '375556917985515'
}
```

We can add a isCreditCard validation to the myFormValues

```javascript
import { isCreditCard } from '@lemoncode/fonk-is-credit-card-validator';

const validationSchema = {
  field: {
    creditCard: [isCreditCard.validator],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { isCreditCard } from '@lemoncode/fonk-is-credit-card-validator';

isCreditCard.setErrorMessage(
  'El valor debe de ser un número de tarjeta de crédito válido'
);
```

- Locally just override the error message for this validationSchema:

```javascript
import { isCreditCard } from '@lemoncode/fonk-is-credit-card-validator';

const validationSchema = {
  field: {
    creditCard: [
      {
        validator: isCreditCard.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
