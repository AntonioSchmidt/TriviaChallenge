import { ANSWER_QUESTION, LOADING_QUESTIONS, LOAD_QUESTIONS } from './reducer';

const answerQuestion = (answer, question) => {
  const isCorrectAnswer = question.correct_answer === answer;
  return { type: ANSWER_QUESTION, payload: { ...question, answeredCorrectly: isCorrectAnswer } };
};

export const loadQuestions = () => async (dispatch, getState, { fetch }) => {
  dispatch({ type: LOADING_QUESTIONS, payload: true });
  const response = await fetch('?amount=10&difficulty=hard&type=boolean');
  if (response.ok) {
    const { results: payload } = await response.json();
    dispatch({ type: LOAD_QUESTIONS, payload });
    dispatch({ type: LOADING_QUESTIONS, payload: false });
  }
};

export default answerQuestion;
