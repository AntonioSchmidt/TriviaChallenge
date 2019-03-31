// @flow
import 'whatwg-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import {
  createStackNavigator, createAppContainer, SafeAreaView, StackActions, NavigationActions,
} from 'react-navigation';
import store from './configure.store';
import HomeComponent, { route as homeRoute } from './components/views/Home';
import {
  Questions, questionRoute, Results, resultRoute,
} from './components/views/Quizz';

type Props = {
  navigation: Object
}

const resetNavigation = routeName => StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName }),
  ],
});
const createNavigationController = (onPushRoute, Component, options = {}) => function NavigationController({ navigation, ...props }: Props) {
  const navigate = options.resetCache ? () => navigation.dispatch(resetNavigation(onPushRoute)) : navigation.navigate;
  return (
    <Component {...props} onPush={params => navigate(onPushRoute, { ...params })}/>
  );
};

const Navigation = createStackNavigator({
  [homeRoute]: {
    screen: createNavigationController(questionRoute, HomeComponent),
  },
  [questionRoute]: {
    screen: createNavigationController(resultRoute, Questions),
  },
  [resultRoute]: {
    screen: createNavigationController(homeRoute, Results, { resetCache: true }),
  },
},
{
  initialRouteName: homeRoute,
  cardStyle: {
    backgroundColor: '#E0E0E0',
  },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#E0E0E0',
    },
  },
});
const AppContainer = createAppContainer(Navigation);
const Container = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#E0E0E0' }}>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </SafeAreaView>
);

export default Container;
