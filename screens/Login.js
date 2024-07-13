import React, { useEffect } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CText from '../components/CText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required')
  // password: Yup.string().min(6, 'Too Short!').required('Required')
});

function Login() {
  const navigation = useNavigation();

  return (
    <View className="px-5 flex justify-center  h-full">
      <CText classN={'font-Bold text-[23px] mb-7'}> Whats Your Name </CText>

      <Formik
        initialValues={{ username: '' }}
        validationSchema={LoginSchema}
        // onSubmit={(values) => console.log(values)}
        onSubmit={() => navigation.navigate('QuizDescription')}
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

            {/* <TextInput
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
            </View> */}

            <TouchableOpacity onPress={handleSubmit}>
              <CText classN={'bg-custom3 p-2 text-center rounded-lg'}>
                Done
              </CText>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      {/* <View className="mt-5 flex flex-row ">
        <Text className="text-white">If you haven't registered,</Text>
        <View>
          <Text
            className="text-blue-400 ml-1 "
            onPress={() => navigation.navigate('Register')}
          >
            click here
          </Text>
        </View>
      </View> */}
    </View>
  );
}

export default Login;
