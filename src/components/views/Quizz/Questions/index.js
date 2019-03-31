import React from 'react';
import { injectReducer } from 'redux-injector';
import { compose } from 'redux';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import reducer from '../reducer';
import QuizzComponent from './Quizz';
import answerQuestion, { loadQuestions } from '../actions';

export const route = 'quizz';

type Props = {
  onPush: (params: Object) => void,
  fetchQuestions: () => void,
  doAnswer: (answer: string, question: Object) => void,
  isLoading: boolean,
  nextQuestion: Object,
  answeredCount: number,
}

class QuizzContainer extends React.Component<Props> {
  componentDidMount(): void {
    this.props.fetchQuestions();
  }

  render(): React.ReactElement<any> {
    const {
      isLoading, nextQuestion, onPush, doAnswer, answeredCount,
    } = this.props;
    let doAnswerQuestion = doAnswer;
    if (answeredCount === 9) {
      doAnswerQuestion = compose(onPush, doAnswerQuestion);
    }
    if (isLoading) {
      return (<ActivityIndicator size="large" color="#0000ff" />);
    }
    return (<QuizzComponent answeredCount={answeredCount} doAnswer={doAnswerQuestion} question={nextQuestion} onPush={onPush} />);
  }
}

injectReducer('Quizz', reducer);

export default connect(({ Quizz }) => ({
  nextQuestion: Quizz.remainingQuestions[0] || {},
  answeredCount: Quizz.answeredQuestionsCount,
  isLoading: Quizz.loading,
}),
dispatch => ({
  fetchQuestions: compose(dispatch, loadQuestions),
  doAnswer: compose(dispatch, answerQuestion),
}))(QuizzContainer);
