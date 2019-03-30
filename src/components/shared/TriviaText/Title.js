import React from 'react';
import { TextStyleProps } from 'react-native';
import TriviaText from './TriviaText';
import styles from './styles';

type Props = {
  ...TextStyleProps,
}

export default function Title({ style, ...props }: Props) {
  const textStyle = { ...styles.title, ...style };
  return (
    <TriviaText {...props} style={textStyle} />
  );
}
