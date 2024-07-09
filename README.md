# useControlledForm

Easily manage your React forms with useControlledForm, a custom hook that simplifies state management and validation for interactive and responsive forms.

## Installation

```bash
npm install use-controlled-form
```

## Usage

First, import the hook from the package:

```javascript
import useControlledForm from 'use-controlled-form';
```

## Basic Form Setup

Initialize your form with default values:

```javascript
const { form, onInputChange } = useControlledForm({
  email: '',
  password: '',
});
```

Use the onInputChange handler to update your form fields:

```html
<form>
  <div>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email' value={form.email.value} onChange={onInputChange}/>
  </div>
  <div>
    <label htmlFor='password'>Password</label>
    <input type='password' name='password' value={form.password.value} onChange={onInputChange} />
  </div>
  <button type='submit'>Submit</button>
</form>
```

Ensure that the name attribute of each input matches the corresponding key in the initial state object passed to useControlledForm.

## Handling Boolean Values

For boolean values such as checkboxes, use the checked attribute:

```javascript
const { form, onInputChange } = useControlledForm({
  rememberMe: false,
});

// ...

<input type='checkbox' name='rememberMe' onChange={onInputChange} checked={form.rememberMe.value} />
```

## Associating Validation Errors

Attach validation errors to inputs using the attachInputError method:

```javascript
const { form, onInputChange, attachInputError } = useControlledForm({
  email: '',
  password: '',
});

// ...

attachInputError(form.email.id, 'Invalid email address');
```

Display errors associated with each input field:

```html
<form onSubmit={onSubmit}>
  <div>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email' value={form.email.value} onChange={onInputChange}/>
    <p>{form.email.error}</p>
  </div>
  // ...
</form>
```

## Resetting the Form

Reset all form fields to their initial values and clear errors using the reset method:

```html
<button type='button' onClick={form.reset}>Reset</button>
```

To clear all validation errors without resetting the field values, use the clearErrors method:

```javascript
form.clearErrors();
```
