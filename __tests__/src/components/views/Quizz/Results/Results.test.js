import React from 'react';
import { mount } from 'enzyme';
import ResultsComponent from '../../../../../../src/components/views/Quizz/Results/Results';

const questions = [
  { category: 'Mathematics', question: '1+1=3?', answeredCorrectly: false },
  { category: 'Mathematics', question: '1+1=2?', answeredCorrectly: true },
];

describe('ResultsComponent', () => {
  describe('when results are displayed', () => {
    it('should show the scores', () => {
      const onPush = jest.fn();
      const wrapper = mount(<ResultsComponent score={5} answeredQuestions={questions} onPush={onPush} />);
      const score = wrapper.find('TriviaText').findWhere(component => component.text() === 'You scored\n5/10').first();
      expect(score).toExist();
    });
  });
});
