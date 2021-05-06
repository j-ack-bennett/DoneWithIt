import React from 'react'
import { StyleSheet } from 'react-native'
import * as yup from 'yup'

import Screen from '../components/Screen'
import Appform from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppFormPicker from '../components/forms/AppFormPicker'
import SubmitButton from '../components/forms/SubmitButton'

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(1)
    .label('Title'),
  price: yup
    .number()
    .required()
    .min(1)
    .max(10000)
    .label('Price'),
  description: yup
    .string()
    .label('Description'),
  category: yup
    .object()
    .required()
    .nullable()
    .label('Category')
})

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 }
]

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Appform 
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField 
          maxLength={255} 
          name='title' 
          placeholder='Title' 
        />
        <AppFormField 
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
        />
        <AppFormPicker 
          items={categories}
          name='category'
          placeholder='Category'
        />
        <AppFormField 
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </Appform>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
