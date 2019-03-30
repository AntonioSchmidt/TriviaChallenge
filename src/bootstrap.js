// @flow
import 'whatwg-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createInjectStore, injectReducer as injector } from 'redux-injector';
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import HomeComponent, { configure as configureHome, route as homeRoute } from './components/views/Home';
import QuizzComponent, { configure as configureQuizz, route as quizzRoute } from './components/views/Quizz';
// import ResultComponent, { configure as configureResult, route as resultRoute } from './components/views/Result';

const endpoint = ' https://opentdb.com/api.php';
const reduxMiddleware = applyMiddleware(thunk.withExtraArgument({
  fetch: (url, options = {}, ...args) => {
    options = {
      method: 'GET',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    url = `${endpoint}${url}`;
    return fetch(url, options, ...args);
  },
}));

const store = createInjectStore({ global: (state = {}) => state }, {}, reduxMiddleware);

configureHome({ injector });
// configureQuizz({ injector });
// configureResult({ injector });

type Props = {
  navigation: Object
}
const createNavigationController = (onPushRoute, Component) => function NavigationController({ navigation, ...props }: Props) {
  return (
    <Component {...props} onPush={params => navigation.navigate(onPushRoute, { ...params })}/>
  );
};

const Navigation = createStackNavigator({
  [homeRoute]: {
    screen: createNavigationController(quizzRoute, HomeComponent),
  },
  [quizzRoute]: {
    screen: createNavigationController('', QuizzComponent),
  },
  // Results: {
  //   screen: createNavigationController(homeRoute, ResultComponent),
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
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
