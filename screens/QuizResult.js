import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import CText from '../components/CText';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuizResult = () => {
  const route = useRoute();
  const navigation = useNavigation();


  return (
    <View className="  flex flex-col h-full">
      <View className="m-4  h-[69%] border-4 border-indigo-600 rounded-lg">
        <ScrollView showsVerticalScrollIndicator={true} className=" p-3 ">
          {route.params.Data?.map((item, index) => (
            <View key={index} className="mb-7 ">
              <CText classN={'text-base text-violet-300 mb-2'}>
                {index + 1}. {item.question}
              </CText>
              <CText classN={'ml-4 text-green-400'}>
                {' '}
                <View  style={{width: 10, height: 10 , backgroundColor: "green", borderRadius: 100}} /> {item.options[item.correctAnswerIndex].answer}
              </CText>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="mx-4 ">
        <CText classN={'ml-1'}>
          You correctly answered{' '}
          <Text className="text-green-600 underline font-bold text-base">
            {route.params.correctAnswerNum}
          </Text>{' '}
          out of 10 questions.
        </CText>
        <CText>
          {' '}
          Your Score is :{' '}
          <Text className="text-green-600  font-bold text-base">
            {route.params.score}
          </Text>{' '}
        </CText>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('QuizTopic')}
        className=" mt-auto mb-4 mx-4"
      >
        <CText classN={'bg-custom3 p-2 text-center rounded-lg text-lg'}>
          Start again
        </CText>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResult;
