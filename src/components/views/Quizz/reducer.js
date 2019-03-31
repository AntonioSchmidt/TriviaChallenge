import { get } from 'lodash';

export const LOAD_QUESTIONS = 'loadQuestions';
export const LOADING_QUESTIONS = 'loadingQuestions';
export const ANSWER_QUESTION = 'answerQuestion';

const initialState = {
  answeredQuestionsCount: 0,
  answeredQuestions: [],
  questions: [],
  remainingQuestions: [],
  loading: false,
  question: {},
  score: 0,
};

const reducer = (state = initialState, action) => ({
  [LOADING_QUESTIONS]: {
    ...state,
    loading: action.payload,
  },
  [LOAD_QUESTIONS]: {
    ...state,
    ...initialState,
    remainingQuestions: action.payload,
    answeredQuestionsCount: 0,
  },
  [ANSWER_QUESTION]: {
    ...state,
    score: get(action, 'payload.answeredCorrectly', false) ? state.score + 1 : state.score,
    answeredQuestionsCount: state.answeredQuestionsCount + 1,
    answeredQuestions: [...get(state, 'answeredQuestions', []), action.payload],
    remainingQuestions: get(state, 'remainingQuestions', []).slice(1),
  },
}[action.type] || state);

export default reducer;
