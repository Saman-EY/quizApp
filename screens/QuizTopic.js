import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CText from '../components/CText';
import { useNavigation } from '@react-navigation/native';

const QuizTopic = () => {

  const navigation = useNavigation();

  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelect = (item) => {
    console.log(item);
    setSelectedTopic(item);
  };

  let handleNext = () => {
    navigation.navigate("QuizScreen", {selectedTopic: selectedTopic})
    setSelectedTopic(null);
  }

  return (
    <View className=" h-full p-4">
      <CText classN={'text-lg font-bold'}>Available topics</CText>

      <View className="flex gap-y-1 mt-3">
        <View className="flex flex-row gap-x-3">
          <Pressable
            onPress={() => handleSelect('General-knowledge')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'General-knowledge' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>General knowledge</CText>
          </Pressable>
          <Pressable
            onPress={() => handleSelect('Programming')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'Programming' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>Programming</CText>
          </Pressable>
        </View>

        <View className="flex flex-row gap-3">
          <Pressable
            onPress={() => handleSelect('Computer-Engineering')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'Computer-Engineering' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>Computer Engineering</CText>
          </Pressable>
          <Pressable
            onPress={() => handleSelect('Mathematics')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'Mathematics' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>Mathematics</CText>
          </Pressable>
        </View>

        <View className="flex flex-row gap-3">
          <Pressable
            onPress={() => handleSelect('JavaScript')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'JavaScript' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>JavaScript</CText>
          </Pressable>
          <Pressable
            onPress={() => handleSelect('C++')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'C++' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>C++</CText>
          </Pressable>
        </View>

        <View className="flex flex-row gap-3">
          <Pressable
            onPress={() => handleSelect('Technology')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'Technology' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>Technology</CText>
          </Pressable>
          <Pressable
            onPress={() => handleSelect('Movies&Tv')}
            className={`h-20 rounded-xl border border-indigo-600 flex justify-center items-center flex-1 ${
              selectedTopic === 'Movies&Tv' && 'bg-indigo-600'
            } `}
          >
            <CText classN={'font-bold'}>Movies and TV Shows</CText>
          </Pressable>
        </View>
      </View>

      <TouchableOpacity onPress={() => handleNext()} disabled={selectedTopic === null ? true : false} className="mb-4 mt-auto">
        <CText classN={`bg-custom3 p-2 text-center rounded-lg text-lg   opacity-100 ${selectedTopic === null && "opacity-50"} `}>
          Select
        </CText>
      </TouchableOpacity>
    </View>
  );
};

export default QuizTopic;
