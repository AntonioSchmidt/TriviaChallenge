import React from 'react';
import { Text, TextStyleProps } from 'react-native';
import styles from './styles';

type Props = {
  ...TextStyleProps
}
export default function TriviaText({ style = {}, children, ...props }: Props) {
  const textStyle = { ...styles.text, ...style };
  return (
    <Text {...props} allowFontScaling={false} style={textStyle} >{children}</Text>
  );
}
