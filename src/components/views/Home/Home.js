import React from 'react';
import { View } from 'react-native';
import TriviaText, { Title } from '../../shared/TriviaText';
import TriviaButton from '../../shared/TriviaButton';
import TriviaLayout from '../../shared/TriviaLayout';
import styles from './styles';

type Props = {
  onPush: (params: Object) => void
}

const HomeContainer = ({ onPush }: Props) => (
  <TriviaLayout header={<Title>{'Welcome to the\nTrivia Challenge'}</Title>}
                content={[
                  <TriviaText key={'scoreQuestion'}>{'You will be presented with 10 true or false questions'}</TriviaText>,
                  <TriviaText key={'question'}>{'Can you score 100%?'}</TriviaText>,
                ]}
                footer={
                  <View style={styles.row}>
                    <TriviaButton text="BEGIN" onPress={onPush}/>
                  </View>
                }
  />
);


export default HomeContainer;
