import React from 'react';
import { View, Text } from 'react-native';
import { AllHtmlEntities } from 'html-entities';
import TriviaText, { Title } from '../../../shared/TriviaText';
import TriviaButton from '../../../shared/TriviaButton';
import TriviaLayout from '../../../shared/TriviaLayout';
import TriviaCard from '../../../shared/TriviaCard';
import styles from '../styles';

type Props = {
  doAnswer: (params: Object) => void,
  question: Object,
  answeredCount: number
}

const entities = new AllHtmlEntities();

const Quizz = ({ doAnswer, question, answeredCount }: Props) => (
  <TriviaLayout header={<Title>{entities.decode(question.category)}</Title>}
                content={
                  <View>
                    <TriviaCard>
                      <TriviaText>{entities.decode(question.question)}</TriviaText>
                    </TriviaCard>
                    <TriviaText>{`${answeredCount} of 10`}</TriviaText>
                  </View>
                  }
                footer={
                  <View style={styles.row}>
                    <TriviaButton testID="btnFalseAnswer" text="False" onPress={() => doAnswer('False', question)}/>
                    <TriviaButton testID="btnTrueAnswer" text="True" onPress={() => doAnswer('True', question)}/>
                  </View>
                  }/>
);


export default Quizz;
