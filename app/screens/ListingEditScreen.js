import React from 'react'
import { StyleSheet } from 'react-native'
import * as yup from 'yup'

import Appform from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppFormPicker from '../components/forms/AppFormPicker'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/forms/FormImagePicker'
import Screen from '../components/Screen'
import SubmitButton from '../components/forms/SubmitButton'
import useLocation from '../hooks/useLocation'

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
    .label('Category'),
  images: yup
    .array()
    .min(1, 'Please select at least one image.')
})

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
]

export default function ListingEditScreen() {
  const location = useLocation()

  return (
    <Screen style={styles.container}>
      <Appform 
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={location => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
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
          width={120}
        />
        <AppFormPicker 
          items={categories}
          name='category'
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
          width='50%'
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
