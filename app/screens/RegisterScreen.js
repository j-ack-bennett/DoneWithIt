import React from 'react'
import { StyleSheet } from 'react-native'
import * as yup from 'yup'

import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import Screen from '../components/Screen'
import SubmitButton from '../components/forms/SubmitButton'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .label('Name'),
  email: yup
    .string()
    .required()
    .email()
    .label('Email'),
  password: yup
    .string()
    .required()
    .min(4)
    .label('Password'),
})

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon='account'
          name='name'
          placeholder='Name'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Register' />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})