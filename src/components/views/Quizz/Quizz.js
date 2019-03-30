import React from 'react';
import { View, Text } from 'react-native';
import { Title } from '../../shared/TriviaText';
import TriviaButton from '../../shared/TriviaButton';
import styles from './styles';

type Props = {
  onPush: (params: Object) => void
}

const Quizz = ({ onPush }: Props) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>{'Quizz'}</Title>
      </View>
    </View>
);


export default Quizz;
