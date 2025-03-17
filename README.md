# useControlledForm

Easily manage your React forms with 'use-managed-form', a custom hook that
simplifies state handling and validations for creating interactive and dynamic
forms.

## Installation

Install the package via npm:

```bash
npm install use-managed-form
```

Or using bun:

```bash
bun add use-managed-form
```

Or using yarn:

```bash
yarn add use-managed-form
```

## Usage

First, import the hook:

```javascript
import useForm from 'use-managed-form'
```

## Initialize Your Form

Define your initial state for the form fields:

```javascript
const initialFormState = {
  email: '',
  password: ''
}
```

Then, initialize the hook:

```javascript
const { form, onChange } = useForm(initialFormState)
```

## Key Features and Returned Object

The `useForm` hook provides the following:

- `<inputKey>`: the value of the input field with the corresponding key in the
  initial state object.
- `form`: an object with the following properties:
  - `<inputKey>`:
    - `id`: the input key.
    - `value`: the current value of the input.
    - `error`: the current validation error associated to the input.
  - `reset`: a function that resets all form fields to their initial values and
    clears all validation errors.
  - `clearErrors`: a function that clears all validation errors without
    resetting the field values.
  - `isValid`: a function that returns a boolean value indicating whether there
    are any validation errors or not.
- `onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)`:
  an event handler that updates the value of a form field when the user
  interacts with it.
- `setValue(key, value)`: Manually update a specific input value.
- `setError(key, error)`: Attach an error message to an input.
- `setEntries(entries)`: Manually update all input values, where entries should
  be of the same shape as the initial state object.

## Example Implementation

```javascript
import React from 'react'
import useForm from 'use-managed-form'

const MyForm = () => {
  const { form, onChange, setError } = useForm({
    email: '',
    password: ''
  })
  const submitAction = () => {
    console.log('After validation')
    // after submit action
    form.reset()
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    form.clearErrors()
    if (!form.email.value) setError(form.email.id, 'Email is required')
    if (!form.password.value) setError(form.password.id, 'Password is required')
    if (!form.isValid()) {
      console.log('Please fix all the errors')
      return
    }
    submitAction()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={form.email.value}
          onChange={onChange}
        />
        <p>{form.email.error}</p>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={form.password.value}
          onChange={onChange}
        />
        <p>{form.password.error}</p>
      </div>
      <button type='submit'>Submit</button>
      <button type='button' onClick={form.reset}>
        Reset
      </button>
    </form>
  )
}

export default MyForm
```

You could also extract each input value individually:

```javascript
const { email, password, form, onChange } = useForm({
  email: '',
  password: ''
})
```

## Working with Checkboxes or Radio Buttons

For boolean values (e.g., checkboxes):

```javascript
const { form, onChange } = useForm({
  rememberMe: false
})

;<input
  type='checkbox'
  name='rememberMe'
  checked={form.rememberMe.value}
  onChange={onChange}
/>
```

## Contributing

Contributions are welcome! Check out the source code on
[GitHub](https://github.com/jorgeabrahan/use-controlled-form). Feel free to open
issues or submit pull requests.

This package is also available on
[npm](https://www.npmjs.com/package/use-managed-form?activeTab=readme).
