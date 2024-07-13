import React from 'react';
import CText from '../components/CText';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function QuizDescription() {

  const navigation = useNavigation();




  return (
    <View className="px-4 h-full flex justify-between">
      <View>
        <CText classN={'font-bold text-[23px] mt-3 mb-7'}>Instructions</CText>

        <CText classN={'leading-5 text-base'}>
          You will be asked 10 questions, and you will proceed to the next
          question by selecting the desired answer.
        </CText>

        <CText classN={'leading-5 text-base my-4'}>
          Each correct answer earns you 2 points, while there are no points
          awarded for incorrect answers.
        </CText>
        <CText classN={'leading-5 text-base'}>
          This quiz has no time limit and does not affect your score. At the
          end, you can view your score.
        </CText>
        <CText classN={'leading-5 text-lg font-bold mt-4'}>
           Good luck!
        </CText>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("QuizTopic")} className="mb-4">
        <CText classN={'bg-custom3 p-2 text-center rounded-lg text-lg'}>
          Let's Start
        </CText>
      </TouchableOpacity>
    </View>
  );
}

export default QuizDescription;

{
  /* <div className='leading-3 font-Bold'></div> */
}
