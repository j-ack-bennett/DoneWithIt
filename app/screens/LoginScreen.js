import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email()
    .label('Email'),
  password: yup
    .string()
    .required()
    .min(4)
    .label('Password')
})

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              onChange={handleChange('email')}
              placeholder='Email'
              textContentType='emailAddress'
            />
            <AppText style={{ color: 'red' }}>{errors.email}</AppText>
            <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChange={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
            <AppText style={{ color: 'red' }}>{errors.password}</AppText>
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
