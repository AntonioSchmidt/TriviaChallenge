import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  header: React.Node,
  content: React.Node,
  footer: React.Node,
}

const HomeContainer = ({ header, content, footer }: Props) => (
    <View style={styles.container}>
      <View style={styles.header}>
        {header}
      </View>
      <View style={styles.content}>
        {content}
      </View>
      <View style={styles.footer}>
        {footer}
      </View>
    </View>
);


export default HomeContainer;
