import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import CText from '../components/CText';
import {
  GeneralKnowledge,
  Programming,
  ComputerEngineering,
  Mathematics,
  JavaScript,
  Cplusplus,
  Technology,
  MoviesAndTv
} from '../data/questions';
import { useNavigation, useRoute } from '@react-navigation/native';

function QuizScreen() {
  const route = useRoute();

  const navigation = useNavigation();

  const [score, setScore] = useState(0);

  const [index, setIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const [answerStatus, setAnswerStatus] = useState(null);

  const [correctAnswerNum, setCorrectAnswerNum] = useState(0);

  let currentQuestion;

  let Data;

  switch (route.params.selectedTopic) {
    case 'General-knowledge':
      currentQuestion = GeneralKnowledge[index];
      Data = GeneralKnowledge;
      break;

    case 'Programming':
      currentQuestion = Programming[index];
      Data = Programming;
      break;

    case 'Computer-Engineering':
      currentQuestion = ComputerEngineering[index];
      Data = ComputerEngineering;
      break;

    case 'Mathematics':
      currentQuestion = Mathematics[index];
      Data = Mathematics;
      break;

    case 'JavaScript':
      currentQuestion = JavaScript[index];
      Data = JavaScript;
      break;

    case 'C++':
      currentQuestion = Cplusplus[index];
      Data = Cplusplus;
      break;

    case 'Technology':
      currentQuestion = Technology[index];
      Data = Technology;
      break;

    case 'Movies&Tv':
      currentQuestion = MoviesAndTv[index];
      Data = MoviesAndTv;
      break;

    default:
      break;
  }

  useEffect(() => {
    setCorrectAnswerIndex(currentQuestion.correctAnswerIndex);
  }, [index]);

  let handleNext = () => {
    if (index + 1 == Data.length) {
      navigation.navigate('QuizResult', {
        Data: Data,
        score: score,
        correctAnswerNum: correctAnswerNum
      });

      setScore(0);
      setIndex(0);
      setSelectedOption(null);
      setCorrectAnswerIndex(null);
      setAnswerStatus(null);
      setCorrectAnswerNum(0);
    } else {
      setIndex((index) => index + 1);
      setSelectedOption(null);
      setAnswerStatus(null);
    }
  };

  let handleClickAnswer = (item) => {
    setSelectedOption(item.id);

    if (correctAnswerIndex === item.id) {
      setScore((score) => score + 2);
      setAnswerStatus(true);
      setCorrectAnswerNum((prev) => prev + 1);
    } else {
      setAnswerStatus(false);
    }
  };

  return (
    <View className="p-4  h-full">
      <CText classN="text-[22px] font-bold  text-violet-300 my-5 ml-2">
        {currentQuestion?.question}
      </CText>

      <View className="flex gap-5 mt-2">
        {currentQuestion?.options.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handleClickAnswer(item)}
            className={`border border-indigo-500 p-3 rounded-lg  ${
              selectedOption === item.id && answerStatus === true
                ? 'bg-green-800'
                : selectedOption === item.id && answerStatus === false
                ? 'bg-red-800'
                : null
            } `}
            disabled={selectedOption !== null && true}
          >
            <CText classN="text-base">
              <Text className="text-white font-bold text-base">
                {item.options} {`)`}{' '}
              </Text>
              {item.answer}
            </CText>
          </Pressable>
        ))}
      </View>

      <TouchableOpacity
        disabled={selectedOption === null && true}
        onPress={handleNext}
        className={`mt-auto flex items-end ${
          selectedOption !== null ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <CText classN={'bg-custom3 p-2 text-center rounded-lg w-20 text-white'}>
          {index + 1 == Data.length ? 'Finish' : 'Next'}
        </CText>
      </TouchableOpacity>
    </View>
  );
}

export default QuizScreen;
