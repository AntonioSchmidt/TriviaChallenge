import React from 'react';

import { Button } from 'react-native-elements';
import styles from './styles';


type Props = {
  text: string,
  onPress: () => void,
  testID?: string,
}

const TriviaButton = ({ onPress, text, testID = '' }: Props) => (
  <Button testID={testID} raised onPress={onPress} title={text} containerStyle={styles.container}/>
);

export default TriviaButton;
