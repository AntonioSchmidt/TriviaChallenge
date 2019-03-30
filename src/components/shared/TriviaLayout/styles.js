import { StyleSheet } from 'react-native';

const styles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignSelf: 'center',
  },
  content: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
};

export default StyleSheet.create(styles);
