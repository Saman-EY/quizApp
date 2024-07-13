import React from 'react';
import { Text} from 'react-native';

function CText({ func, classN, children }) {
  return (
      <Text className={`text-white  ${classN}`}>{children}</Text>
  );
}

export default CText;
