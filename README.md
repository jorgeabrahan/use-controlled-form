# useControlledForm

Easily manage your React forms with useControlledForm, a custom hook that simplifies state management and validation for interactive and responsive forms.

## Installation

```bash
npm install use-managed-form
```

## Usage

First, import the hook from the package:

```javascript
import useControlledForm from 'use-managed-form';
```

## Basic Form Setup

Declare your form initial state:

```javascript
const initialFormState = {
  email: '',
  password: '',
};
```

Now you can use the `initialFormState` object to initialize your form with default values:

```javascript
useControlledForm(initialFormState);
```

## Understanding the Returned Object

The `useControlledForm` hook returns an object with the following properties:

- `[inputKey]`: the value of the input field with the corresponding key in the initial state object.
- `form`: an object with the following properties:
  - `[inputKey]`:
    - `id`: the input key.
    - `value`: the current value of the input.
    - `error`: the current validation error associated with the input.
  - `reset`: a function that resets all form fields to their initial values and clears all validation errors.
  - `clearErrors`: a function that clears all validation errors without resetting the field values.
  - `hasErrors`: a function that returns a boolean value indicating whether there are any validation errors.
- `onInputChange`: a function that updates the value of a form field when the user interacts with it.
- `attachInputError`: a function that associates an error message with a specific form field.

You can extract all this properties directly from the returned object, or use destructuring to extract them individually. Here's an example:

```javascript
const { form, onInputChange, attachInputError } = useControlledForm(initialFormState);
```

You could also extract each input value:

```javascript
const { email, password, onInputChange } = useControlledForm(initialFormState);
```

## Simple JSX Implementation

A simple JSX implementation of the previous form would look like this:

```html
<form>
  <div>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email' value={email} onChange={onInputChange}/>
  </div>
  <div>
    <label htmlFor='password'>Password</label>
    <input type='password' name='password' value={password} onChange={onInputChange} />
  </div>
  <button type='submit'>Submit</button>
</form>
```

> Note: Ensure that the name attribute of each input matches the corresponding key in the initial state object passed to useControlledForm.

## Recommended JSX Implementation

However, the recommended way is to extract each input value from the form object, the reason is that you can also access the input error message from it, here's an example using the `form` object:

```javascript
const { form, onInputChange } = useControlledForm(initialFormState);

// ...

<form>
  <div>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email' value={form.email.value} onChange={onInputChange}/>
    <p>{form.email.error}</p>
  </div>
  <div>
    <label htmlFor='password'>Password</label>
    <input type='password' name='password' value={form.password.value} onChange={onInputChange} />
    <p>{form.password.error}</p>
  </div>
  <button type='submit'>Submit</button>
</form>
```

## Attaching Validation Errors

You could attach validation errors to inputs using the `attachInputError` method:

```javascript
const { form, onInputChange, attachInputError } = useControlledForm(initialFormState);

// ...

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (form.email.value === '') attachInputError(form.email.id, 'Email is required');
  if (form.password.value === '') attachInputError(form.password.id, 'Password is required');
  if (form.hasErrors()) return;
  // Submit form
};
```

The validation errors attached to each input are accessible from the `form` object:

```javascript
form.[inputKey].error
```

## Handling Boolean Values

For boolean values such as checkboxes, use the checked attribute:

```javascript
const { form, onInputChange } = useControlledForm({
  rememberMe: false,
});

// ...

<input type='checkbox' name='rememberMe' onChange={onInputChange} checked={form.rememberMe.value} />
```

## Resetting the Form

Reset all form fields to their initial values and clear errors using the reset method of the form object:

```html
<button type='button' onClick={form.reset}>Reset</button>
```

To clear all validation errors without resetting the field values, use the clearErrors method:

```javascript
form.clearErrors();
```

## Contributing

The source code of this package is available on [GitHub](https://github.com/jorgeabrahan/use-controlled-form). Contributions are welcome.

This package is also published on [npm](https://www.npmjs.com/package/use-managed-form?activeTab=readme).
