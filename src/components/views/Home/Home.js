import React from 'react';
import { View, Text } from 'react-native';
import TriviaText, { Title } from '../../shared/TriviaText';
import TriviaButton from '../../shared/TriviaButton';
import styles from './styles';

type Props = {
  onPush: (params: Object) => void
}

const HomeContainer = ({ onPush }: Props) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>{'Welcome to the\nTrivia Challenge'}</Title>
      </View>
      <View style={styles.content}>
        <TriviaText>{'You will be presented with 10 true or false questions'}</TriviaText>
        <TriviaText>{'Can you score 100%?'}</TriviaText>
      </View>
      <View style={styles.footer}>
        <TriviaButton text="BEGIN" onPress={onPush}/>
      </View>
    </View>
);


export default HomeContainer;
