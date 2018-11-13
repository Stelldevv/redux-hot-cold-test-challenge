import React from 'react';
import {connect} from 'react-redux';

import {TopNav} from './top-nav';
import {restartGame} from '../actions';

describe('<TopNav/>', () => {

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<TopNav dispatch={dispatch} />);
	});

	it('Dispatches restartGame from restartGame', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<TopNav dispatch={dispatch} />);
		dispatch.mockClear();
		const instance = wrapper.instance();
		instance.restartGame();
		expect(dispatch).toHaveBeenCalledWith(restartGame);
	});
});