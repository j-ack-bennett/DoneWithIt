import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, ...otherProps }) {
  const {errors, touched, handleChange, setFieldTouched} = useFormikContext()

  return (
    <>
      <AppTextInput 
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}