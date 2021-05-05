import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as yup from 'yup'

import AppForm from '../components/AppForm'
import AppFormField from '../components/AppFormField'
import Screen from '../components/Screen'
import SubmitButton from '../components/SubmitButton'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .email('Not a valid email address'),
  password: yup
    .string()
    .required('Password field is required')
    .min(4, 'Password is too short')
})

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})
