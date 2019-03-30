import React from 'react';

import { Button } from 'react-native-elements';


type Props = {
  text: string,
  onPress: () => void
}

const TriviaButton = ({ onPress, text }: Props) => (
  <Button onPress={onPress} title={text}/>
);

export default TriviaButton;
