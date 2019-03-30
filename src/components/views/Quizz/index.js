import React from 'react';
import Quizz from './Quizz';

export const route = 'quizz';

export const configure = () => {};

type Props = {
  onPush: (params: Object) => void
}

const QuizzContainer = ({ onPush }: Props) => {
  return (
    <Quizz onPush={onPush} />
  );
};


export default QuizzContainer;
