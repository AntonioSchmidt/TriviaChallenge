import React from 'react';

import { Card } from 'react-native-elements';
import styles from './styles';


const TriviaCard = props => (
  <Card {...props} containerStyle={styles.container} />
);

export default TriviaCard;
