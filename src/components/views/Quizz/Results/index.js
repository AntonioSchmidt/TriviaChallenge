import React from 'react';
import { connect } from 'react-redux';
import Results from './Results';

export const route = 'results';

type Props = {
  onPush: (params: Object) => void,
  score: number,
  answeredQuestions: Array<Object>
}

const ResultsContainer = ({ onPush, answeredQuestions, score }: Props) => (
    <Results score={score} answeredQuestions={answeredQuestions} onPush={onPush} />
);


export default connect(({ Quizz }) => ({
  answeredQuestions: Quizz.answeredQuestions,
  score: Quizz.score,
}))(ResultsContainer);
