import React from 'react';

import { Button } from 'react-native-elements';
import styles from './styles';


type Props = {
  text: string,
  onPress: () => void,
}

const TriviaButton = ({ onPress, text }: Props) => (
  <Button raised onPress={onPress} title={text} containerStyle={styles.container}/>
);

export default TriviaButton;
