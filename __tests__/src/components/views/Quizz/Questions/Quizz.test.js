import React from 'react';
import { mount } from 'enzyme';
import QuizzComponent from '../../../../../../src/components/views/Quizz/Questions/Quizz';

const question = { category: 'Mathematics', question: '1+1=3?' };

describe('QuizzComponent', () => {
  describe('when a question is answered', () => {
    it('should pass the correct parameters', () => {
      const doAnswer = jest.fn();
      const wrapper = mount(<QuizzComponent question={question} answeredCount={1} doAnswer={doAnswer}/>);
      const btnFalse = wrapper.findWhere(node => node.prop('testID') === 'btnFalseAnswer').first();
      const btnTrue = wrapper.findWhere(node => node.prop('testID') === 'btnTrueAnswer').first();
      btnFalse.props().onPress();
      expect(doAnswer).toBeCalledWith('False', question);
      btnTrue.props().onPress();
      expect(doAnswer).toBeCalledWith('True', question);
    });
  });
  describe('when a question is given', () => {
    it('should display the question and it\'s category', () => {
      const doAnswer = jest.fn();
      const wrapper = mount(<QuizzComponent question={question} answeredCount={1} doAnswer={doAnswer}/>);
      const title = wrapper.find('Title').first();
      const questionComponent = wrapper.find('TriviaText').findWhere(component => component.text() === question.question).first();
      expect(title.text()).toEqual(question.category);
      expect(questionComponent.text()).toEqual(question.question);
    });
    it('should render the number of questions answered', () => {
      const doAnswer = jest.fn();
      const wrapper = mount(<QuizzComponent question={question} answeredCount={1} doAnswer={doAnswer}/>);
      const questionsAnswered = wrapper.find('TriviaText').findWhere(component => component.text() === '1 of 10').first();
      expect(questionsAnswered).toExist();
    });
  });
});
