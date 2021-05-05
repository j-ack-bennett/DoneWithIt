import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, ...otherProps }) {
  const {errors, touched, handleChange, setFieldTouched} = useFormikContext()

  return (
    <>
      <AppTextInput 
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {}
})
