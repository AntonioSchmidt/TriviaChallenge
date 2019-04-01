import React from 'react';
import { ScrollView, View } from 'react-native';
import { AllHtmlEntities } from 'html-entities';
import TriviaText, { Title } from '../../../shared/TriviaText';
import TriviaButton from '../../../shared/TriviaButton';
import TriviaLayout from '../../../shared/TriviaLayout';
import styles from '../styles';

type Props = {
  onPush: (params: Object) => void,
  score: number,
  answeredQuestions: Array<Object>
}

const entities = new AllHtmlEntities();

const Results = ({ score, answeredQuestions, onPush }: Props) => (
  <TriviaLayout header={<Title>{`You scored\n${score}/10`}</Title>}
                content={
                  <ScrollView style={styles.scrollview}>
                    {answeredQuestions.map(question => <View style={styles.answers} key={question.question}>
                      <Title>
                        {question.answeredCorrectly ? '+' : '-'}
                      </Title>
                      <TriviaText>
                      {entities.decode(question.question)}
                    </TriviaText>
                      </View>)
                    }
                    </ScrollView>
                }
                footer={
                  <View style={styles.row}>
                    <TriviaButton text="Play again?" onPress={onPush}/>
                  </View>
                  }/>
);


export default Results;
