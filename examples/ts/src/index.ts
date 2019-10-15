import { ValidationSchema, createFormValidation } from '@lemoncode/fonk';
import { isCreditCard } from '@lemoncode/fonk-is-credit-card-validator';

const validationSchema: ValidationSchema = {
  field: {
    myField: [isCreditCard.validator],
  },
};

const formValidation = createFormValidation(validationSchema);

Promise.all([
  formValidation.validateField('myField', '6234917882863855suffix'),
  formValidation.validateField('myField', '375556917985515'),
]).then(([failedResult, succeededResult]) => {
  document.getElementById('app').innerHTML = `
<div style="flex-grow: 1;margin-left:2rem;">
  <h2>Example with failed result:</h2>

<pre>
  formValidation.validateField('myField', '6234917882863855suffix')
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(failedResult, null, 2)}
</pre>
</div>

<div style="flex-grow: 1;">
  <h2>Example with succeeded result:</h2>

<pre>
formValidation.validateField('myField', '375556917985515')
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(succeededResult, null, 2)}
</pre>
</div>
`;
});
