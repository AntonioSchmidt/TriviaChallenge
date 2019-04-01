import React from 'react';
import { mount } from 'enzyme';
import HomeComponent from '../../../../../src/components/views/Home/Home';

describe('HomeComponent', () => {
  describe('when begin button is pressed', () => {
    it('should start the challenge', () => {
      const onPush = jest.fn();
      const wrapper = mount(<HomeComponent onPush={onPush}/>);
      const button = wrapper.find('TriviaButton').first();
      button.props().onPress();
      expect(onPush).toBeCalled();
    });
  });
});
