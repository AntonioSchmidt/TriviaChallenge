import React from 'react';
import Home from './Home';

export const route = 'home';

export const configure = () => {};

type Props = {
  onPush: (params: Object) => void
}

const HomeContainer = ({ onPush }: Props) => (
    <Home onPush={onPush} />
);


export default HomeContainer;
