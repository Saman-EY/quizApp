import React, { useEffect } from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View
} from 'react-native';
import CText from '../components/CText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RadioButton } from 'react-native-paper';

const LoginSchema = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required')
});

function Register() {
  return (
    <View className="px-5 flex justify-center  h-full">
      <CText classN={'font-Bold text-[23px] mb-7'}> Register Form </CText>

      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          username: '',
          password: '',
          role: 'user'
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => (
          <View className="flex  w-full ">
            <TextInput
              className="bg-custom1 border border-custom3 rounded-lg p-2 text-white"
              placeholder="Firstname"
              placeholderTextColor={'#9d9d9d'}
              onChangeText={handleChange('firstname')}
              onBlur={handleBlur('firstname')}
              value={values.firstname}
            />

            <View className="h-6 mt-1">
              {touched.firstname && errors.firstname && (
                <CText classN={'text-red-500 text-xs'}>
                  {errors.firstname}
                </CText>
              )}
            </View>

            <TextInput
              className="bg-custom1 border border-custom3 rounded-lg p-2 text-white"
              placeholder="Lastname"
              placeholderTextColor={'#9d9d9d'}
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              value={values.lastname}
            />

            <View className="h-6 mt-1">
              {touched.lastname && errors.lastname && (
                <CText classN={'text-red-500 text-xs'}>{errors.lastname}</CText>
              )}
            </View>

            <TextInput
              className="bg-custom1 border border-custom3 rounded-lg p-2 text-white"
              placeholder="Username"
              placeholderTextColor={'#9d9d9d'}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />

            <View className="h-6 mt-1">
              {touched.username && errors.username && (
                <CText classN={'text-red-500 text-xs'}>{errors.username}</CText>
              )}
            </View>

            <TextInput
              className="bg-custom1 border border-custom3 rounded-lg p-2  text-white"
              placeholder="Password"
              placeholderTextColor={'#9d9d9d'}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <View className="h-6 mt-1">
              {touched.password && errors.password && (
                <CText classN={'text-red-500 text-xs'}>{errors.password}</CText>
              )}
            </View>

            <Text className="text-white"> Please select your role </Text>
            <RadioButton.Group
              onValueChange={handleChange('role')}
              value={values.role}
            >
              <View className="flex flex-row items-center gap-4">
                <View className="flex flex-row items-center ">
                  <CText>Admin</CText>
                  <RadioButton value="admin"></RadioButton>
                </View>
                <View className="flex flex-row items-center ">
                  <CText>User</CText>
                  <RadioButton value="user"></RadioButton>
                </View>
              </View>
            </RadioButton.Group>

            <TouchableOpacity className="mt-4" onPress={handleSubmit}>
              <CText classN={'bg-custom3 p-2 text-center rounded-lg'}>
                Register
              </CText>
            </TouchableOpacity>

            
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Register;
